"use client";

import * as React from "react";
import { BookOpen, Play, FileText, CheckCircle, ArrowLeft, X, Search, Truck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const VIDEOS = [
  {
    id: "TQElJP1AaS0",
    title: "guide.steps.quote.title",
    duration: "2 dakika",
  },
  {
    id: "54LOQ-iJUSs",
    title: "guide.steps.search.title",
    duration: "1 dakika",
  },
  {
    id: "WO2b03Zdu4Q",
    title: "guide.steps.logistics.title",
    duration: "3 dakika",
  },
  {
    id: "njX2bu-_Vw4",
    title: "guide.steps.health.title",
    duration: "2 dakika",
  },
  {
    id: "3VZFpwlXKpg",
    title: "online.payment.title",
    duration: "2 dakika",
  },
];

const INITIAL_VISIBLE = 4;

function getYouTubeThumbnail(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function RehberClient() {
  const [activeVideo, setActiveVideo] = React.useState<string | null>(null);
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_VISIBLE);
  const t = useTranslations();

  const visibleVideos = VIDEOS.slice(0, visibleCount);
  const hasMore = visibleCount < VIDEOS.length;

  return (
    <div className="flex flex-col">
      <section className="bg-navy py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 translate-y-20" />
        <div className="container mx-auto px-4 relative z-10">
            <Button asChild variant="ghost" className="text-white/60 hover:text-white mb-4 -ml-2 p-2">
              <Link href="/online-islemler">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('guide.back')}
              </Link>
            </Button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">{t('guide.title')}</h1>

          <p className="text-white/60 text-base sm:text-lg max-w-3xl">
            {t('guide.description')}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-gold" />
              <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white">{t('guide.stepTitle')}</h2>
            </div>

            <div className="grid gap-6">
              <div className="bg-muted/30 p-6 border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy dark:text-white mb-2">{t('guide.steps.quote.title')}</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                          <span>{t('guide.steps.quote.step1')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                          <span>{t('guide.steps.quote.step2')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                          <span>{t('guide.steps.quote.step3')}</span>
                        </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <Search className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy dark:text-white mb-2">{t('guide.steps.search.title')}</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>{t('guide.steps.search.step1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>{t('guide.steps.search.step2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>{t('guide.steps.search.step3')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                        <span>{t('guide.steps.search.step4')}</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <Truck className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy dark:text-white mb-2">{t('guide.steps.logistics.title')}</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>{t('guide.steps.logistics.step1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>{t('guide.steps.logistics.step2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>{t('guide.steps.logistics.step3')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                        <span>{t('guide.steps.logistics.step4')}</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <HeartPulse className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy dark:text-white mb-2">{t('guide.steps.health.title')}</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>{t('guide.steps.health.step1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>{t('guide.steps.health.step2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>{t('guide.steps.health.step3')}</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Play className="h-6 w-6 text-gold" />
              <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white">{t('guide.videoTitle')}</h2>
            </div>

            {activeVideo && (
              <div className="mb-8">
                <div className="relative aspect-video bg-black">
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-2 right-2 z-10 w-10 h-10 bg-black/70 hover:bg-black flex items-center justify-center text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                    title="Video Player"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              {visibleVideos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video.id)}
                  className={`bg-card border shadow-sm overflow-hidden text-left transition-all hover:shadow-md hover:border-gold/50 ${activeVideo === video.id ? "ring-2 ring-gold" : ""}`}
                >
                  <div className="aspect-video bg-navy/10 dark:bg-white/5 relative group">
                    <Image
                      src={getYouTubeThumbnail(video.id)}
                      alt={t(video.title as any)}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-gold/90 group-hover:bg-gold rounded-full flex items-center justify-center transition-colors">
                        <Play className="h-8 w-8 text-navy ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-navy dark:text-white">{t(video.title as any)}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{video.duration}</p>
                  </div>
                </button>
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 text-center">
                <Button
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-navy"
                >
                  {t('guide.more')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="h-6 w-6 text-gold" />
              <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white">{t('guide.faqTitle')}</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/30 p-6">
                <h4 className="font-bold text-navy dark:text-white mb-2">{t('guide.faqs.secure.q')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('guide.faqs.secure.a')}
                </p>
              </div>

              <div className="bg-muted/30 p-6">
                <h4 className="font-bold text-navy dark:text-white mb-2">{t('guide.faqs.payment.q')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('guide.faqs.payment.a')}
                </p>
              </div>

              <div className="bg-muted/30 p-6">
                <h4 className="font-bold text-navy dark:text-white mb-2">{t('guide.faqs.download.q')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('guide.faqs.download.a')}
                </p>
              </div>

              <div className="bg-muted/30 p-6">
                <h4 className="font-bold text-navy dark:text-white mb-2">{t('guide.faqs.mobile.q')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('guide.faqs.mobile.a')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('guide.stillHaveQuestions')}</h3>
          <p className="text-white/60 mb-6">{t('guide.expertHelp')}</p>
          <Button asChild className="bg-gold text-navy font-bold rounded-none">
            <Link href="/iletisim">{t('guide.contact')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
