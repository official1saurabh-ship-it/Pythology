export const labSystemGuide = {
  dashboard: {
    title: "Dashboard",
    points: [
      "View today's bookings and pending reports count",
      "Track daily and monthly revenue collection",
      "Quick search patients and bookings by name or ID",
      "Access recent bookings with status overview"
    ]
  },

  testMaster: {
    title: "Test Master",
    setupCategories: "Create categories like Hematology, Biochemistry, Serology, etc.",
    addTests: [
      "Click 'Add Test'",
      "Enter test name, short name, category",
      "Set sample type and price",
      "Add turnaround time and instructions"
    ],
    configureParameters: [
      "Click gear icon on any test",
      "Add parameters (e.g., Hemoglobin, RBC Count)",
      "Set normal ranges for Male/Female/Child",
      "Choose input type: number, text, dropdown",
      "Set display order for report layout"
    ]
  },

  paymentCollection: {
    title: "Payment Collection",
    steps: [
      "Go to Bookings page",
      "Find booking with due amount",
      "Click 'Collect' button (₹ icon)",
      "Enter amount to collect",
      "Click 'Collect Payment'"
    ],
    status: {
      unpaid: "No payment received",
      partial: "Some amount paid, balance due",
      paid: "Full amount collected"
    }
  },

  reportPrinting: {
    title: "Report Printing",
    steps: [
      "From Bookings, click Print (printer) icon",
      "Review report preview",
      "Click 'Print Report' button"
    ],
    includes: [
      "Lab header with logo and contact",
      "Patient details with QR code",
      "Test results with normal ranges",
      "Abnormal values marked with *",
      "Signatory section"
    ]
  },

  settings: {
    title: "Settings",
    config: [
      "Lab Name, Address, Phone, Email",
      "Lab Logo (appears on reports)",
      "Header & Footer text",
      "Signatory Name & Designation",
      "Disclaimer text",
      "Invoice & Booking number prefix"
    ]
  },

  patientManagement: {
    title: "Patient Management",
    register: [
      "Go to Patients page",
      "Click 'Add Patient' button",
      "Fill details: Name, Age, Gender, Phone, Address",
      "Add referring doctor if applicable",
      "Click Save - Patient ID auto-generated"
    ],
    searchEdit: [
      "Use search bar to find by name, phone, or ID",
      "Click Edit icon to update patient details"
    ]
  },

  bookings: {
    title: "Bookings",
    create: [
      "Click 'New Booking'",
      "Search and select patient (or create new)",
      "Select tests from categories",
      "Apply discount if needed (% or fixed)",
      "Enter paid amount",
      "Save booking"
    ],
    search: [
      "Search by Booking ID (e.g., BK-001)",
      "Search by Patient Name",
      "Filter by Report Status or Payment Status"
    ],
    statusFlow: [
      "Pending",
      "In Progress",
      "Completed",
      "Verified",
      "Delivered"
    ]
  },

  reportEntry: {
    title: "Report Entry",
    steps: [
      "From Bookings, click Edit (pencil) icon",
      "Select test from left sidebar",
      "Enter values for each parameter",
      "Abnormal values highlight automatically (red)",
      "Click 'Save Results'",
      "Update report status as needed"
    ],
    tip: "Normal ranges are auto-displayed based on patient's age and gender"
  },

  qrVerification: {
    title: "QR Code Verification",
    details: [
      "Booking ID",
      "Patient Name",
      "Age & Gender",
      "Report Date"
    ]
  }
};