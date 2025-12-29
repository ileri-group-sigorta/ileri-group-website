import * as React from "react";
import { Shield, Target, Eye, Users2, Award, Lightbulb, Heart, HandshakeIcon, TrendingUp, Building, Hospital, Truck, Factory } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return {
    title: t('title'),
    description: t('historyDesc'),
    alternates: {
      canonical: "/hakkimizda",
    },
  };
}

export default async function HakkimizdaPage() {
  const t = await getTranslations('about');
  const tc = await getTranslations('common');

  return (
    <div className="flex flex-col">
      <section className="bg-navy py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 translate-y-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">{t('title')}</h1>
          <nav className="flex text-white/60 text-sm space-x-2">
            <span>{tc('home')}</span>
            <span>/</span>
            <span className="text-gold">{t('title')}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] sm:aspect-[4/5] overflow-hidden border-4 sm:border-8 border-navy/5 dark:border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" 
                  alt="Ofisimiz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 w-32 h-32 sm:w-48 md:w-64 sm:h-48 md:h-64 bg-gold hidden sm:flex items-center justify-center p-4 sm:p-8 text-navy">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">1995</div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider">{tc('foundingYear')}</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white">{t('historyTitle')}</h2>
                <div className="h-1 w-16 sm:w-20 bg-gold" />
              </div>
              
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {t('historyDesc')}
              </p>
              
              <div className="p-4 sm:p-6 bg-navy/5 dark:bg-gold/10 border-l-4 border-gold">
                <p className="text-navy dark:text-white font-medium italic text-sm sm:text-base">
                  {t('mission')}
                </p>
              </div>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {t('missionExtra')}
              </p>
              
              <div className="flex sm:hidden items-center justify-center p-4 bg-gold text-navy">
                <div className="text-center">
                  <div className="text-2xl font-bold">1995</div>
                  <div className="text-xs font-bold uppercase">{tc('foundingYear')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white">{t('visionTitle')}</h2>
            <div className="h-1 w-16 sm:w-20 bg-gold mx-auto" />
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t('visionDesc')}
            </p>
            <div className="inline-block p-3 sm:p-4 bg-gold/10 border border-gold/20 text-gold font-bold text-base sm:text-lg md:text-xl">
              {t('visionHighlight')}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t('reliability')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t('reliabilityDesc')}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <Award className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t('expertise')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t('expertiseDesc')}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t('innovation')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t('innovationDesc')}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <Heart className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t('satisfaction')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t('satisfactionDesc')}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow sm:col-span-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <HandshakeIcon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t('social')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t('socialDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t('teamTitle')}</h2>
                <div className="h-1 w-16 sm:w-20 bg-gold" />
              </div>
              
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                {t('teamDesc')}
              </p>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                {t('teamExtra')}
              </p>

              <div className="p-4 sm:p-6 bg-white/5 border-l-4 border-gold">
                <p className="text-white/90 italic text-sm sm:text-base">
                  {t('teamQuote')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="p-4 sm:p-6 bg-white/5 border border-white/10 text-center">
                <Users2 className="h-8 w-8 sm:h-10 sm:w-10 text-gold mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-white/60">{t('expertStaff')}</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/5 border border-white/10 text-center">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-gold mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">30+</div>
                <div className="text-xs sm:text-sm text-white/60">{t('yearsExperience')}</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/5 border border-white/10 text-center">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-gold mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-white/60">{t('partners')}</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/5 border border-white/10 text-center">
                <Eye className="h-8 w-8 sm:h-10 sm:w-10 text-gold mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">7/24</div>
                <div className="text-xs sm:text-sm text-white/60">{t('supportService')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white">{t('resultsTitle')}</h2>
            <div className="h-1 w-16 sm:w-20 bg-gold mx-auto" />
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t('resultsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16">
            <div className="p-4 sm:p-6 bg-muted/30 text-center group hover:bg-gold/10 transition-colors">
              <Hospital className="h-8 w-8 sm:h-10 sm:w-10 text-navy dark:text-white mx-auto mb-3 sm:mb-4 group-hover:text-gold transition-colors" />
              <div className="text-xs sm:text-sm font-medium text-navy dark:text-white">{t('hospitalClinic')}</div>
            </div>
            <div className="p-4 sm:p-6 bg-muted/30 text-center group hover:bg-gold/10 transition-colors">
              <Building className="h-8 w-8 sm:h-10 sm:w-10 text-navy dark:text-white mx-auto mb-3 sm:mb-4 group-hover:text-gold transition-colors" />
              <div className="text-xs sm:text-sm font-medium text-navy dark:text-white">{t('healthTourism')}</div>
            </div>
            <div className="p-4 sm:p-6 bg-muted/30 text-center group hover:bg-gold/10 transition-colors">
              <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-navy dark:text-white mx-auto mb-3 sm:mb-4 group-hover:text-gold transition-colors" />
              <div className="text-xs sm:text-sm font-medium text-navy dark:text-white">{t('logistics')}</div>
            </div>
            <div className="p-4 sm:p-6 bg-muted/30 text-center group hover:bg-gold/10 transition-colors">
              <Factory className="h-8 w-8 sm:h-10 sm:w-10 text-navy dark:text-white mx-auto mb-3 sm:mb-4 group-hover:text-gold transition-colors" />
              <div className="text-xs sm:text-sm font-medium text-navy dark:text-white">{t('production')}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            <div className="p-4 sm:p-6 md:p-8 bg-navy text-white text-center">
              <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-gold mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-white/60">{t('sectorLeader')}</div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 bg-navy text-white text-center">
              <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-gold mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">%98</div>
              <div className="text-xs sm:text-sm text-white/60">{t('satisfaction')}</div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 bg-navy text-white text-center">
              <Users2 className="h-8 w-8 sm:h-10 sm:w-10 text-gold mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">5000+</div>
              <div className="text-xs sm:text-sm text-white/60">{t('newCustomers')}</div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 bg-navy text-white text-center">
              <Hospital className="h-8 w-8 sm:h-10 sm:w-10 text-gold mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">100+</div>
              <div className="text-xs sm:text-sm text-white/60">{t('hospitalClinic')}</div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 bg-muted/30 border-l-4 border-gold max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-navy dark:text-white leading-relaxed">
              {t('partnerQuote')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
