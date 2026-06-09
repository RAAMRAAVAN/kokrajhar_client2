export default function CallCentreDetails() {
  return (
    <main className="px-6 md:px-16 py-10 font-serif text-gray-900">
      <section className="mt-14 space-y-10 text-gray-800">

  {/* OPD Timing */}
  <div>
    <h2 className="text-xl font-semibold mb-3">
      OPD Appointment Booking Timing
      <span className="block text-sm font-normal text-gray-600">
        (ওপিডি আপইণ্টমেণ্ট বুকিংৰ সময়সূচী)
      </span>
    </h2>

    <p className="text-base leading-relaxed">
      OPD appointment booking through telephone is available during the
      following hours:
    </p>

    <ul className="mt-3 list-disc pl-6 space-y-1 text-base">
      <li>
        <span className="font-medium">Monday to Friday (Working Days):</span>{" "}
        9:00 AM to 5:00 PM IST
      </li>
      <li>
        <span className="font-medium">Saturday (Working Day):</span>{" "}
        9:00 AM to 5:00 PM IST
      </li>
    </ul>

    <p className="mt-4 text-base leading-relaxed">
      (টেলিফোনযোগে ওপিডি আপইণ্টমেণ্ট বুকিং নিম্নলিখিত সময়ত উপলব্ধ:
      সোমবাৰৰ পৰা শুকুৰবাৰ (কাৰ্যদিন) পুৱা ৯:০০ বজাৰ পৰা সন্ধিয়া ৫:০০ বজালৈ,
      আৰু শনিবাৰ (কাৰ্যদিন) পুৱা ৯:০০ বজাৰ পৰা সন্ধিয়া ৫:০০ বজালৈ।)
    </p>

    <p className="text-base leading-relaxed mt-3">
      For Radiology (MRI, X-Ray, CT, Mammography) appointment contact:

      7099003994/7099003996

      Monday to Saturday (Working Days): 9:00 AM to 5:00 PM IST.
    </p>

  </div>

  {/* Appointment Validity */}
  <div>
    <h2 className="text-xl font-semibold mb-3">
      Appointment Validity
      <span className="block text-sm font-normal text-gray-600">
        (আপইণ্টমেণ্টৰ বৈধতা)
      </span>
    </h2>

    <p className="text-base leading-relaxed">
      The validity of OPD appointments is as follows:
    </p>

    <ul className="mt-3 list-disc pl-6 space-y-1 text-base">
      <li>
        <span className="font-medium">New Case:</span> Appointment is valid for
        one month from the date of booking, subject to availability of OPD
        slots.
      </li>
      <li>
        <span className="font-medium">Follow-up Case:</span> Appointment is valid
        for three months from the date of booking, subject to availability of
        OPD slots.
      </li>
    </ul>

    <p className="mt-4 text-base leading-relaxed">
      (নতুন ৰোগীৰ ক্ষেত্ৰত আপইণ্টমেণ্ট বুকিং তাৰিখৰ পৰা এটা মাহলৈ বৈধ,
      ওপিডি স্লটৰ উপলব্ধতাৰ ওপৰত নিৰ্ভৰশীল। ফ’ল’আপ ৰোগীৰ ক্ষেত্ৰত
      আপইণ্টমেণ্ট বুকিং তাৰিখৰ পৰা তিনিমাহলৈ বৈধ,
      ওপিডি স্লটৰ উপলব্ধতাৰ ওপৰত নিৰ্ভৰশীল।)
    </p>
  </div>

</section>

    </main>
  );
}
