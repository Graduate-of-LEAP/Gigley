import { Container } from '../assets/Container';
import { FaStar } from 'react-icons/fa';

export const Testimonials = () => {
  return (
    <Container className="bg-white">
      <div className="h-[#923px]   bg-white mt-8 mb-8">
        <h2 className="text-[#2B4C32] pb-[48px] font-bold text-2xl">
          Хэрэглэгчид Gigley-н талаар ямар бодолтой байгааг харцгаая
        </h2>

        <div className="grid grid-cols-3  ">
          <div className="flex flex-col w-[313px] ">
            <div className="flex items-center ">
              <h3 className="font-bold mr-2 text-black">Энэрэлт.</h3>
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
            </div>

            <p className="text-gray-500 ">
              Батаа надад шүүгээг 30 минут хүрэхгүй хугацаанд угсарч, Гэрт
              эвдэрсэн байсан гал тогооны ширээн дээрны шургуулгыг мөн зассан
            </p>

            <p className="mt-2 text-[#0D7A5F]"> Тавилга угсралт & Эвдрэл</p>
          </div>

          <div className="flex flex-col w-[313px] ">
            <div className="flex items-center ">
              <h3 className="font-bold mr-2 text-black">Хилийн-чимэг.</h3>
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
            </div>

            <p className="text-gray-500 ">
              Анхаа хүүхдийн ор, хувцасны шүүгээ угсарч гайхалтай ажил хийсэн.
              Үүнийг үнэхээр үнэлж байна! Тэрээр ажлынхаа дараа талбайг
              цэвэрлэж, хайрцагнуудыг цэгцэлж үнэхээр их тусалсан.
            </p>

            <p className="mt-2 text-[#0D7A5F]"> Тавилга угсралт & Эвдрэл</p>
          </div>

          <div className="flex flex-col w-[313px]   ">
            <div className="flex items-center ">
              <h3 className="font-bold mr-2 text-black">Нандиа.</h3>
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
            </div>

            <p className="text-gray-500 ">
              Би Дөлөөг хананд 2 нүх, таазныхаа 1 нүхийг нөхөхөөр хөлсөлсөн. Тэр
              харилцаанд маш сайн байсан, хурдан, мэргэжлийн байсан бөгөөд
              гайхалтай ажил хийсэн. Тэр ч байтугай хийх засварууд дээр хоёр
              дахь давхарга хийх гэж буцаж ирсэн
            </p>

            <p className="mt-2 text-[#0D7A5F]"> Гэр ахуйн эвдрэл</p>
          </div>

          <div className="flex flex-col w-[313px] mt-4  ">
            <div className="flex items-center ">
              <h3 className="font-bold mr-2 text-black">Номио.</h3>
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
            </div>

            <p className="text-gray-500 ">
              Төмрөө гайхалтай байсан! Тэр ажлаа хийх бүх тоног төхөөрөмж, тэр
              байтугай надад хэрэг болно гэж мэдэхгүй байсан техник хэрэгсэлтэй
              ирсэн. Хананд тогны залгаарудыг аюулгүйгээр байрлуулж өгсөн
            </p>

            <p className="mt-2 text-[#0D7A5F]"> Цахилгааны тусламж</p>
          </div>

          <div className="flex flex-col w-[313px] mt-4  ">
            <div className="flex items-center ">
              <h3 className="font-bold mr-2 text-black">Галт</h3>
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
            </div>

            <p className="text-gray-500 ">
              Хосоо миний угаалгын өрөөний угаалтуурыг бөглөрүүлж байсан АС ус
              зайлуулах хоолойг зассан. Тэрээр шуурхай, нийтэч, үр дүнтэй
              байсан!
            </p>

            <p className="mt-2 text-[#0D7A5F]"> Сантехник</p>
          </div>

          <div className="flex flex-col w-[313px] mt-4 ">
            <div className="flex items-center ">
              <h3 className="font-bold mr-2 text-black">Болор</h3>
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
            </div>

            <p className="text-gray-500 ">
              Гантулга бидэнд хүрээгүй шилэн нугастай шүршүүрийн хаалгыг
              суурилуулж өгсөн. Тэр тэвчээртэй түүнтэй ажилхад амар байсан.
              Баярлалаа
            </p>

            <p className="mt-2 text-[#0D7A5F]"> Cуурилуулалт</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
