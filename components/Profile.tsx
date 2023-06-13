import Image from "next/image";

import Contact from "./Contact";

const Profile = () => {
  return (
    <section className="flex justify-center md:justify-between gap-8 items-center flex-wrap">
      <Image src="/images/profile.jpg" width={300} height={400} className="rounded-xl min-w-[400]" alt="프로필 사진" />
      <div className="min-w-[250] max-w-[350px]">
        <h2 className="font-bold text-xl sm:text-2xl">프론트엔드 개발자 김윤희입니다.</h2>
        <p className="font-medium mt-6 mb-1">배운 것을 기억하기 위해 기록합니다.</p>
        <p className="font-medium mb-6">어제보다 나은 코드를 작성하기 위해서 노력합니다.</p>
        <Contact />
      </div>
    </section>
  );
};

export default Profile;
