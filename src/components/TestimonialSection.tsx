import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, MessageSquareQuote, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface VideoTestimonial {
  id: string;
  src: string;
  label: string;
  subtitle: string;
}

const TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'story-1',
    src: '/testimonial-video.mp4',
    label: 'Client Story 1',
    subtitle: 'Formulation & Trials Feedback',
  },
  {
    id: 'story-2',
    src: '/testimonial-video-2.mp4',
    label: 'Client Story 2',
    subtitle: 'Production & R&D Experience',
  },
];

function VideoPlayerCard({ item }: { item: VideoTestimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-navy border border-navy/10 group aspect-[9/16] w-full max-w-[340px] sm:max-w-[380px] mx-auto flex items-center justify-center">
      <video
        ref={videoRef}
        src={item.src}
        playsInline
        preload="metadata"
        onEnded={handleVideoEnded}
        className="w-full h-full object-contain bg-black cursor-pointer"
        onClick={togglePlay}
      />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <span className="px-3 py-1 rounded-full bg-navy/80 backdrop-blur-md text-mint-400 text-xs font-semibold border border-white/10 shadow-sm">
          {item.label}
        </span>
      </div>

      {/* Overlay Play / Pause Button */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 bg-navy/35 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all hover:bg-navy/20"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-mint-400 text-navy flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-transform">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-navy ml-1" />
          </div>
        </div>
      )}

      {/* Bottom Video Controls Bar */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-4 flex items-center justify-between text-white transition-opacity z-10">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
        </button>

        <div className="text-center px-2">
          <p className="text-xs font-semibold tracking-wide text-white">{item.subtitle}</p>
        </div>

        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}

export function TestimonialSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-b border-navy/5 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-mint-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-sage rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-50 border border-mint-200/60 mb-3">
            <MessageSquareQuote className="w-4 h-4 text-mint-600" />
            <span className="text-xs font-semibold tracking-wide text-mint-600 uppercase">Client Stories & Feedback</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight">
            Hear Directly from Our Clients
          </h2>
          <p className="text-slate leading-relaxed mt-3 text-base">
            Real feedback on our hands-on food R&amp;D, formulation trials, and dedicated consulting support.
          </p>

          {/* Quick Tab Switcher for Videos */}
          <div className="inline-flex p-1.5 bg-ivory rounded-2xl border border-navy/10 mt-6 shadow-sm">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-navy text-white shadow-md'
                    : 'text-navy/70 hover:text-navy hover:bg-white/60'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Video Player Column */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <Reveal className="w-full flex justify-center">
              <VideoPlayerCard key={TESTIMONIALS[activeTab].id} item={TESTIMONIALS[activeTab]} />
            </Reveal>

            {/* Video switcher dots / arrows */}
            <div className="flex items-center gap-4 mt-5">
              <button
                onClick={() => setActiveTab((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-full bg-ivory border border-navy/10 text-navy hover:bg-mint-50 hover:text-mint-700 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(idx)}
                    aria-label={`Go to ${t.label}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeTab === idx ? 'w-8 bg-mint-500' : 'w-2.5 bg-navy/20 hover:bg-navy/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTab((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                aria-label="Next testimonial"
                className="p-2.5 rounded-full bg-ivory border border-navy/10 text-navy hover:bg-mint-50 hover:text-mint-700 transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Highlights & Context */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="bg-sage/70 rounded-2xl p-6 lg:p-8 border border-navy/8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-mint-400 text-navy flex items-center justify-center font-bold font-display text-lg shadow-sm">
                    &ldquo;
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">Validated by Real Formulations</h3>
                    <p className="text-xs text-mint-700 font-medium">From Concept to Standardized Production</p>
                  </div>
                </div>

                <p className="text-navy/80 text-base leading-relaxed italic">
                  Watch our clients share their experience collaborating with FoodNova Consulting on custom recipe development, trial batches, sensory evaluation, and practical manufacturing handover.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-semibold tracking-wide text-navy uppercase">
                  Why Food Innovators Trust FoodNova
                </h4>
                
                <div className="grid gap-3">
                  {[
                    {
                      title: 'Tailored Formulations',
                      desc: 'Clean ingredients, optimized cost, and authentic taste profile aligned with commercial requirements.',
                    },
                    {
                      title: 'Collaborative Refinement',
                      desc: 'Iterative sensory trials with actionable adjustments based directly on client and consumer feedback.',
                    },
                    {
                      title: 'Production-Ready Process',
                      desc: 'Clear standardization documents, parameters, and shelf-life considerations for seamless scale-up.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory border border-navy/5">
                      <CheckCircle2 className="w-5 h-5 text-mint-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-navy">{item.title}</p>
                        <p className="text-xs text-slate leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-navy-700 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-mint-400" />
                  Start Your Product Journey
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-navy/15 bg-white px-5 py-3.5 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors"
                >
                  Explore Portfolio
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
