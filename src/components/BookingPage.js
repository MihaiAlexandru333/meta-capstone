import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

export default function BookingPage({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
  submitForm,
}) {
  return (
    <>
      <Header />
      <main>
        <div className="booking-form">
          <BookingForm
            bookingData={bookingData}
            setBookingData={setBookingData}
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            submitForm={submitForm}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

