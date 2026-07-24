public class Main {
    public static void main(String[] args) {

        Student s1 =
            new Student("Purushottam Kumar", "MCA", 90);

        StudentDAO dao = new StudentDAO();
        dao.addStudent(s1);
    }
}