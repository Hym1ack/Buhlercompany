import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import userPic1 from '../assets/reviewsPeople/user-1.png';
import userPic2 from '../assets/reviewsPeople/user-2.png';
import userPic3 from '../assets/reviewsPeople/user-3.png';
import userPic4 from '../assets/reviewsPeople/user-4.png';
import { Rating } from './Rating';

import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';

export type ReviewType = {
  image: string;
  name: string;
  orderType: 'transportation' | 'storage' | 'transfer';
  review: string;
  rating: number;
};

const reviews: ReviewType[] = [
  {
    image: userPic1,
    name: 'Oliver Williams',
    orderType: 'transportation',
    review:
      'Vielen Dank an die Mitarbeiter der Buhlercompany! Das Paket wurde schnell und in sehr gutem Zustand geliefert.',
    rating: 1,
  },
  {
    image: userPic3,
    name: 'Thomas Martin',
    orderType: 'transportation',
    review:
      'We’ve been working together for over a year. There are timely deliveries, competent and polite staff who are always in touch. Will continue using their services!',
    rating: 4,
  },
  {
    image: userPic2,
    name: 'Mabel Cooke',
    orderType: 'transportation',
    review:
      'Vielen Dank an die Mitarbeiter der Buhlercompany! Das Paket wurde schnell und in sehr gutem Zustand geliefert.',
    rating: 4,
  },
  {
    image: userPic4,
    name: 'Andreas Weber',
    orderType: 'transportation',
    review:
      'An awesome company. They deliver quickly and at a time that is convenient for me. Very professional and reliable service.',
    rating: 2,
  },
  {
    image: userPic3,
    name: 'Thomas ',
    orderType: 'transportation',
    review: 'loresdasm 10',
    rating: 4,
  },
  {
    image: userPic2,
    name: 'Mabel Weber',
    orderType: 'transportation',
    review:
      'An awesome company. They deliver quickly and at a time that is convenient for me. Very professional and reliable service.',
    rating: 5,
  },
];

export const OurFeedback = () => {
  const { t } = useTranslation();

  return (
    <>
      <h6
        className={
          'mb-20 lg:mb-14 md:mb-8 sm:mb-4 text-3xl font-medium md:text-2xl text-center'
        }
        dangerouslySetInnerHTML={{ __html: t('feedback-title') }}
      />
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.prev-arrow',
          nextEl: '.next-arrow',
        }}
        loop
        autoplay={{ delay: 3 }}
        grabCursor
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
          },
          1170: {
            spaceBetween: 60,
          },
          1300: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 70,
          },
        }}
        className={'relative p-4 md:p-2 w-[90%]'}>
        {reviews.map(review => (
          <SwiperSlide
            key={review.name + review.rating}
            className={
              'drop-shadow-lg bg-white min-w-[250px] w-[390px] md:w-full p-7 xl:p-4 rounded-[20px]'
            }>
            <div className={'flex mb-5'}>
              <img
                className={'mr-7 xl:mr-3 max-w-[58px] h-full'}
                src={review.image}
                alt={'user'}
              />
              <div>
                <p className={'mb-3 text-gray text-xl font-medium'}>
                  {review.name}
                </p>
                <p className={'text-light font-light'}>
                  Cargo {review.orderType}
                </p>
              </div>
            </div>
            <p className={'text-light font-light leading-[19px] mb-2.5'}>
              {review.review}
            </p>
            <Rating rating={review.rating} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={'relative mb-24 md:mb-20'}>
        <button
          className={'prev-arrow absolute left-0 bottom-20 md:bottom-28 z-20'}>
          <img
            className={'md:max-w-[30px] h-full'}
            src={leftArrow}
            alt={'go left'}
          />
        </button>
        <button
          className={'next-arrow absolute right-0 bottom-20 md:bottom-28 z-20'}>
          <img
            className={'md:max-w-[30px] h-full'}
            src={rightArrow}
            alt={'go right'}
          />
        </button>
      </div>
    </>
  );
};
