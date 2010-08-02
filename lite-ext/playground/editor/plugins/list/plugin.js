KISSY.add("editor-plugin-list", function(S) {
    var listNodeNames = {"ol":1,"ul":1},
        listNodeNames_arr = ["ol","ul"],
        emptyTextRegex = /^[\n\r\t ]*$/,
        KE = KISSYEDITOR,
        KER = KE.RANGE,
        KEP = KE.POSITION,
        ElementPath = S.ElementPath,
        Walker = S.Walker,
        KEN = KE.NODE,
        UA = S.UA,
        Node = S.Node,
        DOM = S.DOM;

    var list = {
        /*
         * Convert a DOM list tree into a data structure that is easier to
         * manipulate. This operation should be non-intrusive in the sense that it
         * does not change the DOM tree, with the exception that it may add some
         * markers to the list item nodes when database is specified.
         * ��ƽ����������ȱ��������� indent ��˳������ʾһ����
         */
        listToArray : function(listNode, database, baseArray, baseIndentLevel, grandparentNode) {
            if (!listNodeNames[ listNode._4e_name() ])
                return [];

            if (!baseIndentLevel)
                baseIndentLevel = 0;
            if (!baseArray)
                baseArray = [];

            // Iterate over all list items to and look for inner lists.
            for (var i = 0, count = listNode[0].childNodes.length; i < count; i++) {
                var listItem = new Node(listNode[0].childNodes[i]);

                // It may be a text node or some funny stuff.
                if (listItem._4e_name() != 'li')
                    continue;

                var itemObj = { 'parent' : listNode, indent : baseIndentLevel, element : listItem, contents : [] };
                if (!grandparentNode) {
                    itemObj.grandparent = listNode.parent();
                    if (itemObj.grandparent && itemObj.grandparent._4e_name() == 'li')
                        itemObj.grandparent = itemObj.grandparent.parent();
                }
                else
                    itemObj.grandparent = grandparentNode;

                if (database)
                    listItem._4e_setMarker(database, 'listarray_index', baseArray.length);
                baseArray.push(itemObj);

                for (var j = 0, itemChildCount = listItem[0].childNodes.length, child; j < itemChildCount; j++) {
                    child = new Node(listItem[0].childNodes[j]);
                    if (child[0].nodeType == KEN.NODE_ELEMENT && listNodeNames[ child._4e_name() ])
                    // Note the recursion here, it pushes inner list items with
                    // +1 indentation in the correct order.
                        list.listToArray(child, database, baseArray, baseIndentLevel + 1, itemObj.grandparent);
                    else
                        itemObj.contents.push(child);
                }
            }
            return baseArray;
        },

        // Convert our internal representation of a list back to a DOM forest.
        //���ݰ���indent���Ե�Ԫ��������������
        arrayToList : function(listArray, database, baseIndex, paragraphMode) {
            if (!baseIndex)
                baseIndex = 0;
            if (!listArray || listArray.length < baseIndex + 1)
                return null;
            var doc = listArray[ baseIndex ].parent[0].ownerDocument,
                retval = doc.createDocumentFragment(),
                rootNode = null,
                currentIndex = baseIndex,
                indentLevel = Math.max(listArray[ baseIndex ].indent, 0),
                currentListItem = null,
                paragraphName = paragraphMode;
            while (true) {
                var item = listArray[ currentIndex ];
                if (item.indent == indentLevel) {
                    if (!rootNode
                        ||
                        //�����滻��ǩ,ul->ol ,ol->ul
                        listArray[ currentIndex ].parent._4e_name() != rootNode._4e_name()) {

                        rootNode = listArray[ currentIndex ].parent._4e_clone(false, true);
                        retval.appendChild(rootNode[0]);
                    }
                    currentListItem = rootNode[0].appendChild(item.element._4e_clone(false, true)[0]);
                    for (var i = 0; i < item.contents.length; i++)
                        currentListItem.appendChild(item.contents[i]._4e_clone(true, true)[0]);
                    currentIndex++;
                } else if (item.indent == Math.max(indentLevel, 0) + 1) {
                    //����һ��li���棬�����Ƕ��li�ݹ鹹�츸��ul/ol
                    var listData = list.arrayToList(listArray, null, currentIndex, paragraphMode);
                    currentListItem.appendChild(listData.listNode);
                    currentIndex = listData.nextIndex;
                } else if (item.indent == -1 && !baseIndex && item.grandparent) {
                    currentListItem;
                    if (listNodeNames[ item.grandparent._4e_name() ])
                        currentListItem = item.element._4e_clone(false, true)[0];
                    else {
                        // Create completely new blocks here, attributes are dropped.
                        if (item.grandparent._4e_name() != 'td')
                            currentListItem = doc.createElement(paragraphName);
                        else
                            currentListItem = doc.createDocumentFragment();
                    }

                    for (i = 0; i < item.contents.length; i++)
                        currentListItem.appendChild(item.contents[i]._4e_clone(true, true)[0]);

                    if (currentListItem.nodeType == KEN.NODE_DOCUMENT_FRAGMENT
                        && currentIndex != listArray.length - 1) {
                        if (currentListItem.lastChild
                            && currentListItem.lastChild.nodeType == KEN.NODE_ELEMENT
                            && currentListItem.lastChild.getAttribute('type') == '_moz')
                            DOM._4e_remove(currentListItem.lastChild);
                        DOM._4e_appendBogus(currentListItem);
                    }

                    if (currentListItem.nodeType == KEN.NODE_ELEMENT &&
                        DOM._4e_name(currentListItem) == paragraphName &&
                        currentListItem.firstChild) {
                        DOM._4e_trim(currentListItem);
                        var firstChild = currentListItem.firstChild;
                        if (firstChild.nodeType == KEN.NODE_ELEMENT &&
                            DOM._4e_isBlockBoundary(firstChild)
                            ) {
                            var tmp = doc.createDocumentFragment();
                            DOM._4e_moveChildren(currentListItem, tmp);
                            currentListItem = tmp;
                        }
                    }

                    var currentListItemName = DOM._4e_name(currentListItem);
                    if (!UA.ie && ( currentListItemName == 'div' || currentListItemName == 'p' ))
                        DOM._4e_appendBogus(currentListItem);
                    retval.appendChild(currentListItem);
                    rootNode = null;
                    currentIndex++;
                }
                else
                    return null;

                if (listArray.length <= currentIndex || Math.max(listArray[ currentIndex ].indent, 0) < indentLevel)
                    break;
            }

            // Clear marker attributes for the new list tree made of cloned nodes, if any.
            if (database) {
                var currentNode = new Node(retval.firstChild);
                while (currentNode && currentNode[0]) {
                    if (currentNode[0].nodeType == KEN.NODE_ELEMENT) {
                        currentNode._4e_clearMarkers(database, true);
                        //add by yiminghe:no need _ke_expando copied!

                    }
                    currentNode = currentNode._4e_nextSourceNode();
                }
            }

            return { listNode : retval, nextIndex : currentIndex };
        }
    };


    var headerTagRegex = /^h[1-6]$/;


    function listCommand(type) {
        this.type = type;
    }

    listCommand.prototype = {
        changeListType:function(editor, groupObj, database, listsCreated) {
            // This case is easy...
            // 1. Convert the whole list into a one-dimensional array.
            // 2. Change the list type by modifying the array.
            // 3. Recreate the whole list by converting the array to a list.
            // 4. Replace the original list with the recreated list.
            var listArray = list.listToArray(groupObj.root, database),
                selectedListItems = [];

            for (var i = 0; i < groupObj.contents.length; i++) {
                var itemNode = groupObj.contents[i];
                itemNode = itemNode._4e_ascendant('li', true);
                if ((!itemNode || !itemNode[0]) || itemNode._4e_getData('list_item_processed'))
                    continue;
                selectedListItems.push(itemNode);
                itemNode._4e_setMarker(database, 'list_item_processed', true);
            }

            var fakeParent = new Node(groupObj.root[0].ownerDocument.createElement(this.type));
            for (i = 0; i < selectedListItems.length; i++) {
                var listIndex = selectedListItems[i]._4e_getData('listarray_index');
                listArray[listIndex].parent = fakeParent;
            }
            var newList = list.arrayToList(listArray, database, null, "p");
            var child, length = newList.listNode.childNodes.length;
            for (i = 0; i < length && ( child = new Node(newList.listNode.childNodes[i]) ); i++) {
                if (child._4e_name() == this.type)
                    listsCreated.push(child);
            }
            DOM.insertBefore(newList.listNode, groupObj.root[0]);
            groupObj.root._4e_remove();
        },
        createList:function(editor, groupObj, listsCreated) {
            var contents = groupObj.contents,
                doc = groupObj.root[0].ownerDocument,
                listContents = [];

            // It is possible to have the contents returned by DomRangeIterator to be the same as the root.
            // e.g. when we're running into table cells.
            // In such a case, enclose the childNodes of contents[0] into a <div>.
            if (contents.length == 1 && contents[0][0] === groupObj.root[0]) {
                var divBlock = new Node(doc.createElement('div'));
                contents[0][0].nodeType != KEN.NODE_TEXT && contents[0]._4e_moveChildren(divBlock);
                contents[0][0].appendChild(divBlock);
                contents[0] = divBlock;
            }

            // Calculate the common parent node of all content blocks.
            var commonParent = groupObj.contents[0].parent();
            for (var i = 0; i < contents.length; i++)
                commonParent = commonParent._4e_commonAncestor(contents[i].parent());

            // We want to insert things that are in the same tree level only, so calculate the contents again
            // by expanding the selected blocks to the same tree level.
            for (i = 0; i < contents.length; i++) {
                var contentNode = contents[i],
                    parentNode;
                while (( parentNode = contentNode.parent() )) {
                    if (parentNode[0] === commonParent[0]) {
                        listContents.push(contentNode);
                        break;
                    }
                    contentNode = parentNode;
                }
            }

            if (listContents.length < 1)
                return;

            // Insert the list to the DOM tree.
            var insertAnchor = new Node(listContents[ listContents.length - 1 ][0].nextSibling),
                listNode = new Node(doc.createElement(this.type));

            listsCreated.push(listNode);
            while (listContents.length) {
                var contentBlock = listContents.shift(),
                    listItem = new Node(doc.createElement('li'));

                // Preserve heading structure when converting to list item. (#5271)
                if (headerTagRegex.test(contentBlock._4e_name())) {
                    listItem[0].appendChild(contentBlock[0]);
                } else {
                    contentBlock._4e_copyAttributes(listItem);
                    contentBlock._4e_moveChildren(listItem);
                    contentBlock._4e_remove();
                }
                listNode[0].appendChild(listItem[0]);

                // Append a bogus BR to force the LI to render at full height
                if (!UA.ie)
                    listItem._4e_appendBogus();
            }
            if (insertAnchor && insertAnchor[0])
                DOM.insertBefore(listNode[0], insertAnchor[0]);
            else
                commonParent[0].appendChild(listNode[0]);
        },
        removeList:function(editor, groupObj, database) {
            // This is very much like the change list type operation.
            // Except that we're changing the selected items' indent to -1 in the list array.
            var listArray = list.listToArray(groupObj.root, database),
                selectedListItems = [];

            for (var i = 0; i < groupObj.contents.length; i++) {
                var itemNode = groupObj.contents[i];
                itemNode = itemNode._4e_ascendant('li', true);
                if (!itemNode || itemNode._4e_getData('list_item_processed'))
                    continue;
                selectedListItems.push(itemNode);
                itemNode._4e_setMarker(database, 'list_item_processed', true);
            }

            var lastListIndex = null;
            for (i = 0; i < selectedListItems.length; i++) {
                var listIndex = selectedListItems[i]._4e_getData('listarray_index');
                listArray[listIndex].indent = -1;
                lastListIndex = listIndex;
            }

            // After cutting parts of the list out with indent=-1, we still have to maintain the array list
            // model's nextItem.indent <= currentItem.indent + 1 invariant. Otherwise the array model of the
            // list cannot be converted back to a real DOM list.
            for (i = lastListIndex + 1; i < listArray.length; i++) {
                //if (listArray[i].indent > listArray[i - 1].indent + 1) {
                //modified by yiminghe
                if (listArray[i].indent > Math.max(listArray[i - 1].indent, 0)) {
                    var indentOffset = listArray[i - 1].indent + 1 - listArray[i].indent;
                    var oldIndent = listArray[i].indent;
                    while (listArray[i]
                        && listArray[i].indent >= oldIndent) {
                        listArray[i].indent += indentOffset;
                        i++;
                    }
                    i--;
                }
            }

            var newList = list.arrayToList(listArray, database, null, "p");

            // Compensate <br> before/after the list node if the surrounds are non-blocks.(#3836)
            var docFragment = newList.listNode, boundaryNode, siblingNode;

            function compensateBrs(isStart) {
                if (( boundaryNode = new Node(docFragment[ isStart ? 'firstChild' : 'lastChild' ]) )
                    && !( boundaryNode[0].nodeType == KEN.NODE_ELEMENT && boundaryNode._4e_isBlockBoundary() )
                    && ( siblingNode = groupObj.root[ isStart ? '_4e_previous' : '_4e_next' ]
                    (Walker.whitespaces(true)) )
                    && !( boundaryNode[0].nodeType == KEN.NODE_ELEMENT && siblingNode._4e_isBlockBoundary({ br : 1 }) ))

                    DOM[ isStart ? 'insertBefore' : 'insertAfter' ](editor.document.createElement('br'), boundaryNode[0]);
            }

            compensateBrs(true);
            compensateBrs();

            DOM.insertBefore(docFragment, groupObj.root);
            groupObj.root._4e_remove();
        },

        exec : function(editor) {
            editor.focus();
            var doc = editor.document,
                selection = editor.getSelection(),
                ranges = selection && selection.getRanges();

            // There should be at least one selected range.
            if (!ranges || ranges.length < 1)
                return;

            var bookmarks = selection.createBookmarks(true);

            // Group the blocks up because there are many cases where multiple lists have to be created,
            // or multiple lists have to be cancelled.
            var listGroups = [],
                database = {};

            while (ranges.length > 0) {
                var range = ranges.shift();

                var boundaryNodes = range.getBoundaryNodes(),
                    startNode = boundaryNodes.startNode,
                    endNode = boundaryNodes.endNode;

                if (startNode[0].nodeType == KEN.NODE_ELEMENT && startNode._4e_name() == 'td')
                    range.setStartAt(boundaryNodes.startNode, KER.POSITION_AFTER_START);

                if (endNode[0].nodeType == KEN.NODE_ELEMENT && endNode._4e_name() == 'td')
                    range.setEndAt(boundaryNodes.endNode, KER.POSITION_BEFORE_END);

                var iterator = range.createIterator(),
                    block;

                iterator.forceBrBreak = false;

                while (( block = iterator.getNextParagraph() )) {
                    var path = new ElementPath(block),
                        pathElements = path.elements,
                        pathElementsCount = pathElements.length,
                        listNode = null,
                        processedFlag = false,
                        blockLimit = path.blockLimit,
                        element;

                    // First, try to group by a list ancestor.
                    for (var i = pathElementsCount - 1; i >= 0 && ( element = pathElements[ i ] ); i--) {
                        if (listNodeNames[ element._4e_name() ]
                            && blockLimit.contains(element))     // Don't leak outside block limit (#3940).
                        {
                            // If we've encountered a list inside a block limit
                            // The last group object of the block limit element should
                            // no longer be valid. Since paragraphs after the list
                            // should belong to a different group of paragraphs before
                            // the list. (Bug #1309)
                            blockLimit._4e_removeData('list_group_object');

                            var groupObj = element._4e_getData('list_group_object');
                            if (groupObj)
                                groupObj.contents.push(block);
                            else {
                                groupObj = { root : element, contents : [ block ] };
                                listGroups.push(groupObj);
                                element._4e_setMarker(database, 'list_group_object', groupObj);
                            }
                            processedFlag = true;
                            break;
                        }
                    }

                    if (processedFlag)
                        continue;

                    // No list ancestor? Group by block limit.
                    var root = blockLimit;
                    if (root._4e_getData('list_group_object'))
                        root._4e_getData('list_group_object').contents.push(block);
                    else {
                        groupObj = { root : root, contents : [ block ] };
                        root._4e_setMarker(database, 'list_group_object', groupObj);
                        listGroups.push(groupObj);
                    }
                }
            }

            // Now we have two kinds of list groups, groups rooted at a list, and groups rooted at a block limit element.
            // We either have to build lists or remove lists, for removing a list does not makes sense when we are looking
            // at the group that's not rooted at lists. So we have three cases to handle.
            var listsCreated = [];
            while (listGroups.length > 0) {
                groupObj = listGroups.shift();
                if (this.state == "off") {
                    if (listNodeNames[ groupObj.root._4e_name() ])
                        this.changeListType(editor, groupObj, database, listsCreated);
                    else
                        this.createList(editor, groupObj, listsCreated);
                }
                else if (this.state == "on" && listNodeNames[ groupObj.root._4e_name() ])
                    this.removeList(editor, groupObj, database);
            }

            // For all new lists created, merge adjacent, same type lists.
            for (i = 0; i < listsCreated.length; i++) {
                listNode = listsCreated[i];
                //note by yiminghe,why not use merge sibling directly
                //listNode._4e_mergeSiblings();

                var mergeSibling, listCommand = this;
                ( mergeSibling = function(rtl) {

                    var sibling = listNode[ rtl ?
                        '_4e_previous' : '_4e_next' ](Walker.whitespaces(true));
                    if (sibling && sibling[0] &&
                        sibling._4e_name() == listCommand.type) {
                        sibling._4e_remove();
                        // Move children order by merge direction.(#3820)
                        sibling._4e_moveChildren(listNode, rtl ? true : false);
                    }
                } )();
                mergeSibling(true);

            }

            // Clean up, restore selection and update toolbar button states.
            for (var i in database)
                database[i]._4e_clearMarkers(database, true);

            selection.selectBookmarks(bookmarks);
            editor.focus();
        }
    };


    var TripleButton = S.TripleButton;

    /**
     * �õ��˰�ť��״̬������״̬��off:������ʽ����on:����������ʽ��
     * @param cfg
     */
    function List(cfg) {
        List.superclass.constructor.call(this, cfg);
        var editor = this.get("editor"),toolBarDiv = editor.toolBarDiv,
            el = this.el;
        var self = this;
        self.el = new TripleButton({
            text:this.get("type"),
            container:toolBarDiv
        });
        this.listCommand = new listCommand(this.get("type"));
        this.listCommand.state = this.get("status");
        //this._selectionChange({path:1});
        this._init();
    }

    List.ATTRS = {
        editor:{}
    };

    S.extend(List, S.Base, {

        _init:function() {
            var editor = this.get("editor"),toolBarDiv = editor.toolBarDiv,
                el = this.el;
            var self = this;
            el.on("click", this._change, this);
            editor.on("selectionChange", this._selectionChange, this);
        },


        _change:function() {
            var editor = this.get("editor"),
                type = this.get("type"),
                el = this.el,
                self = this;
            //ieҪ�Ȼ���ܻ�ý��㴰�ڵ�ѡ������
            setTimeout(function() {
                editor.focus();
                self.listCommand.state = el.get("state");
                self.listCommand.exec(editor);
                editor.fire(type + "Change");
            }, 10);
        },

        _selectionChange:function(ev) {
            var editor = this.get("editor"),
                type = this.get("type"),
                currentValue = this.get("v"),
                elementPath = ev.path,
                element,
                el = this.el,
                blockLimit = elementPath.blockLimit,
                elements = elementPath.elements;

            // Grouping should only happen under blockLimit.(#3940).
            if (elements)
                for (var i = 0; i < elements.length && ( element = elements[ i ] )
                    && element[0] !== blockLimit[0]; i++) {
                    var ind = S.indexOf(elements[i]._4e_name(), listNodeNames_arr);
                    //ul,olһ����Ч����һ����ʧЧ
                    if (ind !== -1) {
                        if (listNodeNames_arr[ind] === type) {
                            el.set("state", TripleButton.ON);
                            return;
                        } else {
                            break;
                        }

                    }
                }
            el.set("state", TripleButton.OFF);
        }
    });

    S.ListUtils = list;
    KE.on("instanceCreated", function(ev) {
        var editor = ev.editor;
        new List({
            editor:editor,
            type:"ul"
        });
        new List({
            editor:editor,
            type:"ol"
        });
    });
});