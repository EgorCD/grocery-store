import React from 'react';
import { ScrollView} from 'react-native';
import { COMMON_STYLES } from '../../styles/styles';
import CategorySection from '../../components/items/CategorySection';
import UserGreeting from '../../components/UserGreeting';

function Home() {
  return (
    <ScrollView style={COMMON_STYLES.outerContainer}>
      <UserGreeting />
      <CategorySection categoryName="Coffee" />
      <CategorySection categoryName="Grocery" />
    </ScrollView>
  );
}

export default Home;
