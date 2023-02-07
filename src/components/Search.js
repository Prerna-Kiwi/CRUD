import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar style={styles.searchbar}
      placeholder="search for atta, daal and coke"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
 searchbar:{
     alignContent: 'center',
     margin: 10,
     borderRadius: 10,
 },
});

export default Search;