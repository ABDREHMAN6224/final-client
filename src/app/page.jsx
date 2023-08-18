import Video from '@/components/Video';
import Featured from '@/components/Featured';
import LeatherGoods from '@/components/LeatherGoods';
import LeatherFeatures from '@/components/LeatherFeatures';
import Newsletter from '@/components/Newsletter';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  const products=[
    {
      id:1,
    image:"p1.webp",
    title:"boston 50 bag"
  },
    {
      id:2,
    image:"p2.webp",
    title:"bourget pm trolley case "
  },
    {
      id:3,
    image:"p3.webp",
    title:"artois gm bag"
  },
]
  return (
    <>
      <Video />
      <Featured />
      <LeatherGoods />
      <LeatherFeatures />
      <Video
      title_l1={"LUST"}
      title_l2={""}
      title_l3={""}
      pl1={"The goyard"}
      pl2={"travel bags"}
      isLoading={true}
      text='discover'
        video={
          "https://www.goyard.com/media/video/homepage/2023/08/desktop/Bloc-video-3-guide-de-porte-desktop.mp4"
        }
      />
      <Featured products={products} title='now boarding!'/>
      <Newsletter />
      <Testimonial />
    </>
  );
}
