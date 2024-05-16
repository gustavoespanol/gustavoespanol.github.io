import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { buttonVariants } from '@/components/ui/button';

const ContactForm = () => {
  const t = useTranslations('Contact');
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data: { [key: string]: string }) => {
    const mapping = {
      name: 'entry.1204700904',
      email: 'entry.909390080',
      phone: 'entry.762594360',
      subject: 'entry.524413299',
      message: 'entry.1727964424',
    };

    const formData = new FormData();

    Object.entries(mapping).forEach(([key, gKey]) => {
      formData.append(gKey, data[key || ''] || '');
    });

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLScKzB5HWPZXJb8v84_RBotQFeVpeulLyk546dGUX5--MYYO4A/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: formData,
        },
      );

      reset();
      setMessage(t('message_sent.success'));
    } catch (error) {
      setMessage(t('message_sent.error'));
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full px-6">
        <div className="flex gap-4 pb-4">
          <div className="w-full">
            <input
              className="block w-full appearance-none rounded border border-gray-100 bg-white px-4 py-3 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-name"
              type="text"
              placeholder={t('name')}
              {...register('name', {
                required: true,
              })}
            />
            {errors.name && (
              <div className="block text-left text-sm font-bold tracking-wide ">
                {t('error.required_field')}
              </div>
            )}
          </div>

          <div className="w-full">
            <input
              className="block w-full appearance-none rounded border border-gray-100 bg-white px-4 py-3 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-phone"
              type="text"
              placeholder={t('phone')}
              {...register('phone', {
                required: true,
                pattern: /^(\+|\d)(0|[1-9]\d*)(\.\d+)?$/,
              })}
            />
            {errors.phone?.type === 'required' && (
              <div className="block text-left text-sm font-bold tracking-wide ">
                {t('error.required_field')}
              </div>
            )}
            {errors.phone?.type === 'pattern' && (
              <div className="block text-left text-sm font-bold tracking-wide ">
                {t('error.must_be_a_number')}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4 pb-4">
          <div className="w-full">
            <input
              className="block w-full appearance-none rounded border border-gray-100 bg-white px-4 py-3 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-email"
              type="text"
              placeholder={t('email')}
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email?.type === 'required' && (
              <div className="block text-left text-sm font-bold tracking-wide  ">
                {t('error.required_field')}
              </div>
            )}

            {errors.email?.type === 'pattern' && (
              <div className="block text-left text-sm font-bold tracking-wide ">
                {t('error.invalid_email')}
              </div>
            )}
          </div>

          <div className="w-full">
            <input
              className="block w-full appearance-none rounded border border-gray-100 bg-white px-4 py-3 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-subject"
              type="text"
              placeholder={t('subject')}
              {...register('subject', {
                required: true,
              })}
            />
            {errors.subject && (
              <div className="block text-left text-sm font-bold tracking-wide">
                {t('error.required_field')}
              </div>
            )}
          </div>
        </div>

        <div className="w-full ">
          <textarea
            className="block w-full appearance-none rounded border border-gray-100 bg-white px-4 py-3 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-message"
            {...register('message', {
              required: true,
            })}
            placeholder={t('message')}
          />
          {errors.message && (
            <div className="block text-left text-sm font-bold tracking-wide ">
              {t('error.required_field')}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between px-6 font-bold">
        <div>{message}</div>
        <a
          className={`${buttonVariants({ size: 'lg' })} cursor-pointer`}
          onClick={handleSubmit(onSubmit)}
        >
          {t('send_message')}
          <PaperPlaneIcon className="ml-2 size-5" />
        </a>
      </div>
    </form>
  );
};

export { ContactForm };
