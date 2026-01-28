import HeroSection from '../sections/HeroSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';

export default function HomeView({
  onNavigate,
  onOpenPrivacy,
  onSelectSede,
  onViewSede,
  selectedSede,
}) {
  return (
    <>
      <HeroSection
        onNavigate={onNavigate}
        onOpenPrivacy={onOpenPrivacy}
        onSelectSede={(sede) => {
          onSelectSede?.(sede);
          onNavigate?.('#contacto');
        }}
        onViewSede={onViewSede}
      />
      <ContactSection
        selectedSede={selectedSede}
        onSelectSede={onSelectSede}
        onOpenPrivacy={onOpenPrivacy}
      />
      {/* 
      <MethodSection />
      <SedeRouteSection
        onSelectSede={(sede) => {
          onSelectSede?.(sede);
          onNavigate?.('#contacto');
        }}
        onViewSede={onViewSede}
      />
      <SitesSection
        onSelectSede={(sede) => {
          onSelectSede?.(sede);
          onNavigate?.('#contacto');
        }}
        onViewSede={onViewSede}
      />
      <IdentitySection />
      <JustificationSection />
       */}
    </>
  );
}
