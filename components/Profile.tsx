import Image from "next/image";

import Contact from "./Contact";

const Profile = () => {
  return (
    <section className="flex justify-between max-sm:flex-col">
      <Image src="/images/profile.jpg" width={300} height={300} className="rounded-xl" alt="프로필 사진" />
      <div className="flex flex-col justify-center sm:ml-10 max-sm:mt-7">
        <h2 className="font-medium sm:text-2xl text-xl">프론트엔드 개발자 김윤희입니다.</h2>
        <p className="sm:text-lg mt-6 mb-1">배운 것을 기억하기 위해 기록합니다.</p>
        <p className="sm:text-lg mb-6">어제보다 더 나은 코드를 작성하기 위해서 노력합니다.</p>
        <Contact />
      </div>
    </section>
  );
};

export default Profile;
