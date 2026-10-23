import { Reveal } from './Reveal';

const BRANDS = ['TENTKOTTA', 'VILVAA', 'UNAVIFY'];

export function ProductBrandsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-navy/5">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center mb-8">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Commercial Product Experience</p>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy leading-tight mt-2">
            Brands Referenced in the Portfolio
          </h2>
          <p className="text-sm text-slate-light mt-3 max-w-xl mx-auto">
            These brands are referenced in the project portfolio. Official product images will be displayed once supplied and approved by the client.
          </p>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {BRANDS.map((brand, i) => (
            <Reveal key={brand} delay={i * 100}>
              <div className="flex items-center justify-center px-8 py-4 rounded-xl border border-navy/10 bg-ivory">
                <span className="font-display text-xl lg:text-2xl font-bold tracking-wide text-navy/30 select-none">
                  {brand}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
