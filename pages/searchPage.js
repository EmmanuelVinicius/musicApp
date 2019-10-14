import React, { Component } from 'react'
import { SearchBar, Button } from 'react-native-elements';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'

const platform = 'android';
export default class SearchList extends Component {
  state = {
    search: '',
    loading: false,
    data: [],
    error: null,
  };

  arrayholder = [];
  // updateSearch = search => {
  //   list.filter(item => item.title.indexOf(search) > -1)
  //   this.setState({ search });
  // };
  componentDidMount = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });

        this.arrayholder = res.results;
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

    this.setState({ data: newData, search: text });
  };

  render() {
    const { search } = this.state
    return (
      <View>
        <View style={style.head}>
          <SearchBar
          containerStyle={style.searchBar}
            placeholder="Pesquisar..."
            onChangeText={text => this.searchFilterFunction(text)}
            value={search}
            clearIcon
            platform="android"
          />
          <Button
            title="cancel"
            type="clear"
            style={{color: 'red'}}
            onPress={() => this.props.navigation.navigate('InitialMap')}
          />
        </View>
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
      </View>
    )
  }
}

const style = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center"
  },
  searchBar: {
    width: '80%'
  }
})