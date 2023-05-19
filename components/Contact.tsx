import Image from "next/image";

const Contact = () => {
  return (
    <ul className="flex">
      <li className="mr-3">
        <a href="yooni97311@gmail.com">
          <Image src="/images/email.svg" width={24} height={24} alt="이메일" />
        </a>
      </li>
      <li>
        <a href="https://github.com/kyh1685">
          <Image src="/images/github.svg" width={24} height={24} alt="깃허브" />
        </a>
      </li>
    </ul>
  );
};

export default Contact;
