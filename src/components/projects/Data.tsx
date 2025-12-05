// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
  {
    title: 'Google Assistant Based Electric Device Control',
    description:
      'A Google Assistant device was used to control the whole process through voice commands. Voice commands are used as input for the device to connect our Google Assistant device to the Adafruit server, which allows hundreds of different services to trigger actions in a variety of other services. Controlling the light fans and other home appliances are done with voice commands. The Google assistant-controlled device has a processing unit. It will process all input commands. The light and fans have separate driver modules to control. The processing unit controls the driver module. The process like on/off of appliances, adjusting the speed of the fan, and adjusting the brightness of light occur done by the control module.',
    techStack: [
      'Google Assistant',
      'Adafruit IO',
      'IoT',
      'Voice Control',
      'Home Automation',
      'Arduino',
    ],
    date: 'Jan 2020 - Apr 2020',
    associatedWith: 'Anna University, Coimbatore',
    links: [],
    images: [
      { src: '/projects/placeholder.png', alt: 'Google Assistant IoT Project' },
    ],
  },
  {
    title: 'IoT Based Plant Monitoring System',
    description:
      'In this project, we mainly use an ARDUINO and BOLT as a platform for the transmission, which controls the sensor\'s reading and updates to the online server every 5 seconds. Where ESP8266 is a wifi module that connects the BOLT platform through the server login id. By simply Turn on the hotspot the board automatically connects to the server. Hear we connect 3 sensors mainly humidity sensor – which monitors the humidity of an atmosphere and reports to the server. Soil moisture sensor – which detects the moisture in the soil. IoT is short for the Internet of Things. The Internet of Things(IoT) is internetworking of physical devices. This system has the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.',
    techStack: [
      'Arduino',
      'Bolt IoT',
      'ESP8266',
      'Humidity Sensor',
      'Soil Moisture Sensor',
      'IoT',
      'Cloud Integration',
    ],
    date: 'Aug 2019 - Nov 2019',
    associatedWith: 'Anna University, Coimbatore',
    links: [],
    images: [
      { src: '/projects/placeholder.png', alt: 'IoT Plant Monitoring System' },
    ],
  },
  {
    title: 'Amazon Music Clustering (AI/ML)',
    description:
      'Machine learning project focused on clustering Amazon music data to identify patterns and group similar songs. Applied unsupervised learning techniques to analyze music features and create meaningful clusters for music recommendation systems.',
    techStack: ['Python', 'Machine Learning', 'Clustering', 'Data Analysis', 'Pandas', 'NumPy'],
    date: '2024',
    associatedWith: 'Guvi Online Education Platform',
    links: [],
    images: [
      { src: '/projects/placeholder.png', alt: 'Amazon Music Clustering Project' },
    ],
  },
  {
    title: 'Luxury House Price Analysis - Bangalore',
    description:
      'Comprehensive data science project involving Exploratory Data Analysis (EDA), Data Visualization, and PostgreSQL database integration for analyzing luxury house prices in Bangalore. Performed statistical analysis and created interactive visualizations to identify pricing trends and market insights.',
    techStack: ['Python', 'EDA', 'Data Visualization', 'PostgreSQL', 'Pandas', 'Matplotlib', 'Seaborn'],
    date: '2024',
    associatedWith: 'Guvi Online Education Platform',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/SuryaPrakash-root/Luxury_House_Bangalore',
      },
    ],
    images: [
      { src: '/projects/placeholder.png', alt: 'Luxury House Bangalore Analysis' },
    ],
  },
  {
    title: 'Multiclass Fish Image Classification',
    description:
      'Developed a deep learning model for classifying fish images into multiple classes. The project involved comprehensive data preparation, cleaning, and visualization. Implemented convolutional neural networks (CNN) to achieve high accuracy in fish species identification, useful for marine biology research and fisheries management.',
    techStack: [
      'Deep Learning',
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
      'Image Classification',
      'Data Visualization',
      'OpenCV',
    ],
    date: '2024',
    associatedWith: 'Guvi Online Education Platform',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/SuryaPrakash-root/Multiclass_Fish_Image_Classification',
      },
    ],
    images: [
      { src: '/projects/placeholder.png', alt: 'Fish Image Classification Project' },
    ],
  },
  {
    title: 'PhonePe Data Visualization',
    description:
      'Data visualization project utilizing Python and PostgreSQL to analyze and visualize PhonePe transaction data. Created interactive dashboards and charts to display payment trends, user behavior patterns, and transaction analytics. Implemented database queries to extract meaningful insights from large-scale financial data.',
    techStack: ['Python', 'PostgreSQL', 'Data Visualization', 'Pandas', 'Plotly', 'Streamlit'],
    date: '2024',
    associatedWith: 'Guvi Online Education Platform',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/SuryaPrakash-root/Phonepay_Project_1',
      },
    ],
    images: [
      { src: '/projects/placeholder.png', alt: 'PhonePe Data Visualization' },
    ],
  },
  {
    title: 'Transaction Fraud Detection (AI/ML)',
    description:
      'Academic project focused on developing supervised machine learning models to detect fraudulent transactions using anomaly detection algorithms. Implemented classification techniques including Random Forest, XGBoost, and Neural Networks to identify patterns in financial data and improve fraud detection accuracy. The system analyzes transaction features to flag suspicious activities in real-time.',
    techStack: [
      'Machine Learning',
      'Anomaly Detection',
      'Fraud Detection',
      'Classification',
      'Python',
      'Scikit-learn',
      'XGBoost',
    ],
    date: '2024',
    associatedWith: 'Academic Project',
    links: [],
    images: [
      { src: '/projects/placeholder.png', alt: 'Transaction Fraud Detection' },
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
            {projectData.associatedWith && (
              <>
                <span className="mx-1">•</span>
                <span>{projectData.associatedWith}</span>
              </>
            )}
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  {
    category: 'IoT & Home Automation',
    title: 'Google Assistant Based Electric Device Control',
    src: '/projects/placeholder.png',
    content: (
      <ProjectContent project={{ title: 'Google Assistant Based Electric Device Control' }} />
    ),
  },
  {
    category: 'IoT & Agriculture',
    title: 'IoT Based Plant Monitoring System',
    src: '/projects/placeholder.png',
    content: (
      <ProjectContent project={{ title: 'IoT Based Plant Monitoring System' }} />
    ),
  },
  {
    category: 'AI/ML & Music Analytics',
    title: 'Amazon Music Clustering (AI/ML)',
    src: '/projects/placeholder.png',
    content: (
      <ProjectContent project={{ title: 'Amazon Music Clustering (AI/ML)' }} />
    ),
  },
  {
    category: 'Data Science & Real Estate',
    title: 'Luxury House Price Analysis - Bangalore',
    src: '/projects/placeholder.png',
    content: (
      <ProjectContent project={{ title: 'Luxury House Price Analysis - Bangalore' }} />
    ),
  },
  {
    category: 'Deep Learning & Computer Vision',
    title: 'Multiclass Fish Image Classification',
    src: '/projects/placeholder.png',
    content: (
      <ProjectContent project={{ title: 'Multiclass Fish Image Classification' }} />
    ),
  },
  {
    category: 'Data Science & FinTech',
    title: 'PhonePe Data Visualization',
    src: '/projects/placeholder.png',
    content: (
      <ProjectContent project={{ title: 'PhonePe Data Visualization' }} />
    ),
  },
  {
    category: 'AI/ML & Cybersecurity',
    title: 'Transaction Fraud Detection (AI/ML)',
    src: '/projects/placeholder.png',
    content: (
      <ProjectContent project={{ title: 'Transaction Fraud Detection (AI/ML)' }} />
    ),
  },
];