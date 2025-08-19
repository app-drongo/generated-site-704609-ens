import PageHeader from '../../components/PageHeader';
import Pricing from '../../components/Pricing';

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeader />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>
    </main>
  );
}