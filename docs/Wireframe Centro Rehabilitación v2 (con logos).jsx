function App() {
  const brand = {
    blue: {
      700: "#1F4E79",
      600: "#2563EB",
      50: "#EFF6FF",
    },
    teal: {
      700: "#0F766E",
      50: "#ECFDF5",
    },
    rose: {
      700: "#BE185D",
      600: "#DB2777",
      50: "#FFF1F2",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-rose-50">
      {/* Top bar */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-2">
                <img
                  src="logoAzul.jpg"
                  alt="Logo CON-CIENCIA (Azul)"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold text-slate-900">Centro de Atención Integral de las Adicciones</div>
                <div className="text-xs text-slate-600">Atención profesional • Confidencialidad • Acompañamiento</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-2">
              <img
                src="logoRosa.jpg"
                alt="Logo CON-CIENCIA (Rosa)"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 ring-1 ring-black/5 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: brand.teal[700] }} />
              <span className="text-sm font-semibold text-slate-800">Tratamiento especializado en adicciones</span>
              <span className="text-xs text-slate-500 hidden sm:inline">— 2 sedes</span>
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Recuperación integral con un enfoque humano y clínico
            </h1>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-xl">
              Te ayudamos a dar el siguiente paso con acompañamiento profesional, planes personalizados y un entorno seguro.
              Selecciona la sede para ver información, instalaciones y contacto directo.
            </p>

            {/* Primary CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#sede-hombres"
                className="group inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-bold text-white shadow-lg focus:outline-none focus:ring-4"
                style={{ background: brand.blue[700] }}
              >
                Sede Hombres
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
              </a>

              <a
                href="#sede-mujeres"
                className="group inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-bold text-white shadow-lg focus:outline-none focus:ring-4"
                style={{ background: brand.rose[700] }}
              >
                Sede Mujeres
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Secondary info */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/85 backdrop-blur p-4 ring-1 ring-black/5">
                <div className="text-sm font-bold text-slate-900">Atención 24/7</div>
                <div className="text-xs text-slate-600 mt-1">Orientación y admisiones</div>
              </div>
              <div className="rounded-2xl bg-white/85 backdrop-blur p-4 ring-1 ring-black/5">
                <div className="text-sm font-bold text-slate-900">Confidencialidad</div>
                <div className="text-xs text-slate-600 mt-1">Trato respetuoso y seguro</div>
              </div>
              <div className="rounded-2xl bg-white/85 backdrop-blur p-4 ring-1 ring-black/5">
                <div className="text-sm font-bold text-slate-900">Equipo clínico</div>
                <div className="text-xs text-slate-600 mt-1">Intervención profesional</div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Emergencias:</span> llama al número local de emergencias de tu país.
            </div>
          </div>

          {/* Image / Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              {/*
                IMPORTANTE:
                - Por políticas del Playground, no coloco imágenes web.
                - Para usar una IMAGEN REAL, sube una foto (ej. hero.jpg) y reemplaza el src aquí.
              */}
              <img
                src="https://placehold.co/1200x900/0F172A/FFFFFF?text=Sube+una+foto+real+para+el+Hero+(ej.+hero.jpg)"
                alt="Imagen hero (reemplazar por foto real)"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />

              {/* Overlay gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-slate-900/10 to-transparent" />

              {/* Floating badge */}
              <div className="absolute left-5 bottom-5 right-5">
                <div className="rounded-2xl bg-white/90 backdrop-blur p-5 ring-1 ring-black/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">Primera consulta</div>
                      <div className="text-sm text-slate-700 mt-1">
                        Información clara sobre el proceso, duración y acompañamiento.
                      </div>
                    </div>
                    <div className="shrink-0 flex gap-2">
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white"
                        style={{ background: brand.blue[700] }}
                      >
                        Hombres
                      </span>
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white"
                        style={{ background: brand.rose[700] }}
                      >
                        Mujeres
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiny caption */}
            <div className="mt-4 text-xs text-slate-600">
              Recomendación: usa una foto real cálida (interior limpio, luz natural, equipo profesional o espacio terapéutico).
            </div>
          </div>
        </div>

        {/* Anchor sections placeholders (to visualize routing) */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <section id="sede-hombres" className="rounded-3xl bg-white p-7 ring-1 ring-black/5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl" style={{ background: brand.blue[50] }} />
              <div>
                <div className="text-lg font-extrabold" style={{ color: brand.blue[700] }}>Sede Hombres</div>
                <div className="text-sm text-slate-600">Vista de la página específica</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-700">
              Aquí irían instalaciones, programa, testimonios y CTA de contacto.
            </div>
          </section>

          <section id="sede-mujeres" className="rounded-3xl bg-white p-7 ring-1 ring-black/5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl" style={{ background: brand.rose[50] }} />
              <div>
                <div className="text-lg font-extrabold" style={{ color: brand.rose[700] }}>Sede Mujeres</div>
                <div className="text-sm text-slate-600">Vista de la página específica</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-700">
              Aquí irían instalaciones, programa, testimonios y CTA de contacto.
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}