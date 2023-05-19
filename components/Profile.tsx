import Image from "next/image";

import Contact from "./Contact";

const Profile = () => {
  return (
    <section className="flex justify-between">
      <Image src="/images/profile.jpg" width={300} height={300} className="rounded-xl" alt="프로필 사진" />
      <div className="px-8 flex flex-col justify-center">
        <h2 className="text-2xl">프론트엔드 개발자 김윤희입니다.</h2>
        <p className="text-lg mt-5">배운 것을 기억하기 위해 기록합니다.</p>
        <p className="text-lg mb-3">어제보다 더 나은 코드를 작성하기 위해서 노력합니다.</p>
        <Contact />
      </div>
    </section>
  );
};

export default Profile;
