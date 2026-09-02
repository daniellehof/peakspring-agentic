import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PotentialSlider } from "@/components/site/HomeSections";
import { notFound } from "next/navigation";
import cmsData from "@/content/cms-export.json";

const cms = cmsData as any;
const videos: Record<string, any> = {};

const videoCol = cms.collections?.["69798387493c019bcbc17000"];
const videoItems = videoCol?.items?.items || [];
for (const item of videoItems) {
  const fd = item.fieldData || item;
  videos[fd.slug || item.slug] = fd;
}

export function generateStaticParams() {
  return Object.keys(videos).map(slug => ({ slug }));
}

export default function VideoPage({ params }: { params: { slug: string } }) {
  const video = videos[params.slug];
  if (!video) notFound();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[82.5rem] px-[3.75rem]">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{video.name || video["seo-optimised-title"]}</h1>
            {video.description && <p className="mt-4 max-w-2xl text-lg text-[#5d6c7b]">{video.description}</p>}
            {video["blog-article"] && (
              <article className="mt-10 max-w-3xl text-base leading-relaxed text-[#5d6c7b]" dangerouslySetInnerHTML={{ __html: video["blog-article"] }} />
            )}
            {video["video-link"]?.url && (
              <div className="mt-10">
                <a href={video["video-link"].url} target="_blank" className="inline-flex rounded-[4.5rem] bg-[#175a6b] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#08303a] transition-colors">
                  Watch on Vimeo →
                </a>
              </div>
            )}
          </div>
        </section>
        <PotentialSlider />
      </main>
      <Footer />
    </>
  );
}