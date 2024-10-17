'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '../ui/form';
import { Calendar } from '../ui/calendar';
import React from 'react';
import { TimePicker } from '../ui/time-picker';

const formSchema = z.object({
  dateTime: z.date(),
});

type FormSchemaType = z.infer<typeof formSchema>;

export const ChooseDateAndTime = () => {
  const [date, setDate] = React.useState<Date>(new Date());
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: FormSchemaType) {
    console.log(values);
  }

  const formattedDate = date ? date.toLocaleDateString() : 'No date selected';
  const formattedTime = date
    ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : 'No time selected';

  return (
    <Dialog>
      <DialogTrigger>Date</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="p-5">Ажиллуулах огноо сонгох:</DialogTitle>
          <DialogDescription className="text-black">
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="dateTime"
                    render={({ field }) => (
                      <FormItem className="flex">
                        <div>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(newDate) => {
                              if (newDate) {
                                setDate(newDate);
                                field.onChange(newDate);
                              }
                            }}
                            className="rounded-md"
                            disabled={(date) => date < new Date()}
                          />
                          <div className="p-3 ">
                            <TimePicker
                              setDate={(newTime) => {
                                if (date) {
                                  const updatedDate = new Date(date);
                                  updatedDate.setHours(
                                    newTime.getHours(),
                                    newTime.getMinutes()
                                  );
                                  setDate(updatedDate);
                                  field.onChange(updatedDate);
                                }
                              }}
                              date={date}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col px-3 text-lg justify-center gap-2 border-l">
                          <div className="flex flex-col">
                            <div>Ажиллуулах огноо:</div>
                            <div className="flex">
                              <div>{formattedDate},</div>
                              <div>{formattedTime}</div>
                            </div>
                          </div>
                          <button className="border rounded-xl bg-black text-white py-1 px-2 hover:bg-gray-700">
                            Үргэлжлүүлэх
                          </button>
                          <div className="text-sm">
                            Нэмэлт мэдээллийг оруулан үргэлжлүүлнэ үү
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
