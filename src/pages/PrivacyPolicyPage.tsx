// Privacy policy page.

function PrivacyPolicyPage() {
  return (
    <div>
      <div className="text-2xl text-gray-500 text-center pt-10">
        <p>
          Privacy and <span className="text-gray-700 font-medium">Policy</span>
        </p>
      </div>

      <div className="flex flex-col my-10 justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-start gap-6 w-3/4 text-lg text-gray-600">
          <p>
            This website project was created as a way to review and practice
            frontend skills and is part of my portfolio. It is not intended for
            any profit-making purposes.
            <br /> I would like to extend my gratitude to "GreatStack", the
            original creator of this website project, for their creative work
            and for publicly sharing it, allowing others to use it as a resource
            to practice and develop their skills.
          </p>

          <p>
            โปรเจ็คเว็บไซต์นี้ทำขึ้นเพื่อเป็นการทบทวนและฝึกฝนทักษะทางด้าน
            Frontend และเป็นส่วนหนึ่งของแฟ้มสะสมผลงาน
            มิได้มีจุดประสงค์ในด้านการแสวงหากำไรใด ๆ ทั้งสิ้น
            <br />
            ขอขอบคุณ "ทีมงาน GreatStack" เจ้าของต้นแบบโปรเจ็คเว็บไซต์นี้ด้วยมา ณ
            ที่นี้
            ที่ได้สร้างสรรค์ผลงานขึ้นมาและนำมาเผยแพร่แบบสาธารณะให้บุคคลทั่วไปสามารถนำมาฝึกฝนทักษะตามต้นทางได้
          </p>

          <p>
            このウェブサイトプロジェクトは、フロントエンドのスキルを復習し、練習するために作成されたものであり、
            <br />
            ポートフォリオの一部です。営利目的ではありません。
            <br />
            また、このウェブサイトプロジェクトの元の作成者である「GreatStack様」に感謝を申し上げます。
            <br />
            公開して一般の人々がスキルを練習し、
            自分のスキルや能力を向上させたい人のためのリソースとして活用できるようにもらったことに感謝いたします。
          </p>

          <a
            href="https://www.youtube.com/watch?v=eRTTlS0zaW8&t=21814s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Credit:{" "}
              <span className="italic hover:text-red-400 cursor-pointer">
                https://www.youtube.com/watch?v=eRTTlS0zaW8&t=21814s
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;

