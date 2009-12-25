import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.Console;
import java.io.File;
import java.io.FileFilter;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.Adler32;
import java.util.zip.CheckedOutputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

/**
@author: http://yiminghe.javaeye.com
@date: 20091225
*/
public class Publish {

	public static String[] Need_Compressed = { "base", "TabPanelLite",
			"WindowLite" };
	private static int BUFFER = 1024;

	private static String getCurrentFolder() {
		Properties properties = System.getProperties();
		return properties.getProperty("user.dir");
	}

	/**
	 * ���жϰ����������жϺ�������Ŀ¼�������� svn ���ļ��������Ϻ����������ϰ�������ͨ��
	 * 
	 * @param zipOutput
	 *            zip��
	 * @param srcDir
	 *            Ҫѹ���ļ�����Ŀ¼
	 * @param basePath
	 *            ѹ�����ڵĿ�ʼ·��
	 * @param whiteFileList
	 *            ������
	 * @param blackFileList
	 *            ������
	 * @throws IOException
	 */
	private static void zipFile(ZipOutputStream zipOutput, File srcDir,
			String basePath, final String[] whiteFileList,
			final String[] blackFileList) throws IOException {
		File[] fs = srcDir.listFiles(new FileFilter() {
			public boolean accept(File curFile) {

				// �ж�Ŀ¼
				if (curFile.isDirectory()) {
					// ������ svn ����Ŀ¼
					if (curFile.getName().indexOf("svn") != -1
							&& curFile.isHidden()) {
						return false;
					} else {
						return true;
					}
				}

				// �ж��ļ�

				if (blackFileList != null) {
					// ���жϺ�����
					for (String filter : blackFileList) {
						if (curFile.isFile()
								&& curFile.getName().endsWith(filter))
							return false;
					}
					// �������жϰ�����
				}

				// ���ڰ�����
				if (whiteFileList != null) {
					for (String filter : whiteFileList) {
						if (curFile.isFile()
								&& curFile.getName().endsWith(filter))
							return true;
					}
					// �����ϰ�������Ϊfalse
					return false;
				}
				// ������ null ,û�����ã���ȫ��ͨ��
				else {
					return true;
				}

			}
		});
		if (fs != null) {
			byte[] b = new byte[BUFFER];
			int len = 0;
			for (File file : fs) {
				if (file.isDirectory()) {
					zipFile(zipOutput, file, basePath + "/" + file.getName(),
							whiteFileList, blackFileList);
					continue;
				}
				FileInputStream in = new FileInputStream(file);
				zipOutput.putNextEntry(new ZipEntry(basePath + "/"
						+ file.getName()));
				while ((len = in.read(b)) != -1) {
					zipOutput.write(b, 0, len);
				}
				in.close();
			}
		}
	}

	/**
	 * �õ�ϵͳ�İ汾��
	 * 
	 * @return verion in manifest.json
	 */
	static String getVersion() {
		String ver = "0";
		BufferedReader r = null;
		try {
			Pattern p = Pattern
					.compile("\"version\"\\s*:\\s*\"(\\d+(?:\\.\\d+)*)\"");
			Matcher m = p.matcher("");
			r = new BufferedReader(new InputStreamReader(new FileInputStream(
					"manifest.json"), "utf-8"));
			String line;
			while ((line = r.readLine()) != null) {
				m.reset(line);
				if (m.find()) {
					ver = m.group(1);
					break;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (r != null)
					r.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return ver;
	}

	public static void main(String[] args) throws Exception {
		String curFolder = getCurrentFolder();
		File curFile = new File(curFolder);
		String ver = getVersion();
		String zipName = curFile.getName() + "_" + ver + ".zip";
		// Adler32 is faster than CRC32
		FileOutputStream zipFile = new FileOutputStream(zipName);
		CheckedOutputStream csum = new CheckedOutputStream(zipFile, new Adler32());
		ZipOutputStream zipOutput = new ZipOutputStream(
				new BufferedOutputStream(csum));
		zipOutput.setComment("fdu img uploader " + ver);
		File srcDir = curFile;
		//��ѹ���Ӽ���������zip,����ȫ��ѹ��
		zipFile(zipOutput, srcDir, curFile.getName(), null, new String[] { ".zip",".bak"  ,".class" });
		for (String curCompress : Need_Compressed) {
			srcDir = new File("../../" + curCompress);
			if (srcDir != null)
				//��������ֻѹ�� css ,js ��������bak���༭�������ļ�
				zipFile(zipOutput, srcDir, curFile.getName() + "/lite-ext/" + curCompress,
						new String[] { ".css", ".js" }, new String[]{".bak"});
		}
		zipOutput.close();

		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println("*****************************");
		System.out.println();
		System.out.println(zipName +"  generated ! \n\n\n press enter to quit !");
		
		System.in.read();
		
	}
}
