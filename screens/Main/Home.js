import React from 'react';
import { View } from 'react-native';
import { COMMON_STYLES } from '../../styles/styles';
import CategorySection from '../../components/items/CategorySection';
import UserGreeting from '../../components/UserGreeting';

function Home() {
  return (
    <View style={COMMON_STYLES.outerContainer}>
      <UserGreeting />
      <CategorySection categoryName="Coffee" />
      <CategorySection categoryName="Grocery" />
    </View>
  );
}

export default Home;
