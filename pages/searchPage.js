import React from 'react'
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';

export default class Search extends React.Component {
  state = {
    loading: false,
    data: [],
    error: null,
  };

  arrayHolder = []

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.results,
          error: result.error || null,
          loading: false,
        });

        this.arrayHolder = result.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()}   
          ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  };

  render() {
    return (
      <View>
        <SearchBar
          placeholder="Pesquisar..."
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
        />
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </List>
      </View>
    );
  }
}