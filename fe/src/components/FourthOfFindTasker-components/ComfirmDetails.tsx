'use client';

import { Container } from '../assets/Container';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCreditCard } from 'react-icons/fa6';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const ComfirmDetails = () => {
  return (
    <Container className="bg-white">
      <div className="w-[558px] h-fit border rounded-lg mt-[32px]">
        <div className="h-full w-full px-6 py-[64px] ">
          <h1 className="text-3xl font-bold text-[#0D7A5F]">
            Дэлгэрэнгүй мэдээллийг баталгаажуулна уу
          </h1>
          <h3 className="text-2xl mt-2">Төлбөрийн хэрэгсэл</h3>
          <p className="py-2">
            Санаа зоволтгүй - таны даалгавар дууссаны дараа л танд төлбөр төлөх
            болно!
          </p>
          <div className="flex items-center gap-2 rounded border px-1 mb-2">
            <FaRegCreditCard />
            <Input placeholder="Card Number" />
          </div>
          <p className="pt-4 text-[14px] text-[#0D7A5F] mb-4">
            Promo code <Input />
          </p>
          <Image
            className="mt-4"
            src="/picture/rabbit.png"
            alt="Picture of the author"
            width={137}
            height={86}
          />
          <p className="text-[14px] mt-2">
            Бидэнтэй нэгдээрэй, тусламж хэрэгтэй байгаа хөршүүддээ ажил, Gigley
            танилцуулж туслаарай.
          </p>
          <p className="text-[14px] font-bold underline-offset-2 mt-1">
            <Link href="/gigleyforgood">Learn more</Link>
          </p>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {/* <Checkbox id="donate" /> */}
                <label htmlFor="donate" className="ml-2 font-bold">
                  Сайн сайхны төлөө Gigley-д 1 доллар хандивлая
                </label>
              </AccordionTrigger>
              <AccordionContent>
                Гайхалтай! Таны хандив хэн нэгнийг толгой дээрээ дээвэртэй,
                тогтмол орлоготой хөл дээр нь босгоход тусалдаг.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button className="mt-6" variant="outline">
            Баталгаажуулж, чатлах
          </Button>
          <p className="text-[14px] mt-[24px]">
            Санаа зоволтгүй, таны даалгавар дуусах хүртэл танд төлбөр төлөхгүй.
            Баталгаажуулсны дараа та Taskerтайгаа чатлаж дэлгэрэнгүй мэдээллийг
            шинэчлэх боломжтой.
          </p>
        </div>
      </div>
    </Container>
  );
};
