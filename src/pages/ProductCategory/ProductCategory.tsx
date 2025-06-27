import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useGetProductQuery } from '../../redux/features/AdminApi/ProductApi';
import MountCategory from './MountCategory';
import { Bike } from '../../types';
import Container from '../../components/shared/Containeer/Containeer';

const ProductCategory = () => {
  const { data, error, isLoading } = useGetProductQuery(undefined);
  const [tabIndex, setTabIndex] = useState(0);

  const products = data?.data || [];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  const mountainBikes = products?.filter((item: Bike) => item.category === "Mountain") || [];
  const roadBikes = products?.filter((item: Bike) => item.category === "Road") || [];
  const hybridBikes = products?.filter((item: Bike) => item.category === "Hybrid") || [];
  const electricBikes = products?.filter((item: Bike) => item.category === "Electric") || [];

  // Render based on screen width
  const renderProducts = (products: Bike[]) => {
    const isMobile = window.innerWidth < 640;
    const sliceCount = isMobile ? 3 : 5;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6"
      >
        {products.slice(0, sliceCount).map((item) => (
          <MountCategory item={item} key={item._id} />
        ))}
      </motion.div>
    );
  };

  return (
    <Container>
      <div className="my-6 md:my-12">
        <div className='text-center'>
          <p className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>Bike Category</p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Get Your Desired Product from Featured Category!
          </p>
        </div>

        <motion.div initial="hidden" animate="visible" variants={tabVariants}>
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="flex flex-wrap justify-center gap-2 my-8">
              {['Mountain', 'Road', 'Hybrid', 'Electric'].map((category, index) => (
                <Tab key={category}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium cursor-pointer transition-all duration-300 ${
                      tabIndex === index
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {category}
                    </div>
                  </motion.div>
                </Tab>
              ))}
            </TabList>

            <TabPanel>{renderProducts(mountainBikes)}</TabPanel>
            <TabPanel>{renderProducts(roadBikes)}</TabPanel>
            <TabPanel>{renderProducts(hybridBikes)}</TabPanel>
            <TabPanel>{renderProducts(electricBikes)}</TabPanel>
          </Tabs>
        </motion.div>
      </div>
    </Container>
  );
};

export default ProductCategory;
