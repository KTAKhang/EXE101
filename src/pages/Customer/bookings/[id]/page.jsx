import BookingDetail from './BookingDetail';

export async function generateStaticParams() {
  return [
    { id: 'BK-2024-001' },
    { id: 'BK-2024-002' },
    { id: 'BK-2023-015' },
    { id: 'BK-2023-012' },
    { id: 'BK-2023-008' },
  ];
}

export default function BookingDetailPage({ params }) {
  return <BookingDetail bookingId={params.id} />;
}