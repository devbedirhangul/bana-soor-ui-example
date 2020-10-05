import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, Platform, TextInput, ScrollView, FlatList } from 'react-native';

//Packages
import axios from "axios";

//Components
import { CategoryCard,UserCard } from "../components/common/index"

export default class Home extends Component {

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2")
      .then(res => {
        this.setState({
          persons: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  renderItem = (user) => {
    console.log(user)
    return (
      <UserCard
        userImage={user.item.avatar}
        firstName={user.item.first_name}
        lastName={user.item.last_name}
        userId={user.item.id}
      />
    )
  }

  render() {

    const {
      maintContainer,
      banner,
      icon, searchBarWrapper,
      textInput,
      categoryWrapper,
      searchIcon,
      searchIconWrapper,
      title,
      footerContainer,
      footerImage
    } = styles;

    return (
      <SafeAreaView style={maintContainer}>
        <ScrollView>
        <View style={banner}>
          <Image style={icon} source={require("../assets/logo/banasoor_logo.png")} />
        </View>
        <View>
          <View style={searchBarWrapper}>
            <TextInput style={textInput} placeholder="Uzmanlarda ya da konularda ara" />
            <View style={searchIconWrapper}>
              <Image style={searchIcon} source={require("../assets/icons/search.png")} />
            </View>
          </View>
          <View style={categoryWrapper}>
            <Text style={title}>Popüler Kategoriler</Text>
            <ScrollView horizontal={true}>
              <CategoryCard categoryImage={require("../assets/images/kisisel-gelisim.jpg")} title="Kişisel Gelişim" />
              <CategoryCard categoryImage={require("../assets/images/yatirim.jpg")} title="Yatırım" />
              <CategoryCard categoryImage={require("../assets/images/teknoloji-ve-muhendislik.jpg")} title="Teknoloji ve Mühendislik" />
              <CategoryCard categoryImage={require("../assets/images/sanat.jpg")} title="Sanat" />
              <CategoryCard categoryImage={require("../assets/images/is-ve-ticaret.jpg")} title="İş ve Ticaret" />
            </ScrollView>
          </View>
          <View style={categoryWrapper}>
            <Text style={title}>Öne Çıkanlar</Text>
            <FlatList 
              data={this.state.persons}
              horizontal={true}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={categoryWrapper}>
            <Text style={title}>En Popüler</Text>
            <FlatList
              data={this.state.persons}
              horizontal={true}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={categoryWrapper}>
            <Text style={title}>En Yeniler</Text>
            <FlatList
              data={this.state.persons}
              horizontal={true}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
            </View>
            <View style={footerContainer}>
              <Image style={footerImage} source={require("../assets/images/kisisel-gelisim.jpg")}/>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>UZMAN OLUN</Text>
                <Text>Uzman falan olun işte takılın falan böyle</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = {
  maintContainer: {
    flex: 1,
    backgroundColor: "white",
    
  },
  banner: {
    justifyContent: "center",
    alignItems: "center",
    padding: Platform.OS == "android" ? 10 : 0
  },
  icon: {
    width: 110,
    height: 20,
    resizeMode: 'stretch',
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color:"#2D3640"
  },
  searchBarWrapper: {
    margin: 15,
    backgroundColor: "#EBEBEB",
    borderRadius: 12,
    padding: Platform.OS == "ios" ? 18 : 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
  searchIconWrapper: {
    flex: 1,
    alignItems: "flex-end",
    padding: 5
  },
  textInput: {
    fontWeight: "bold",
    color: "#8A93A4",
    borderBottomWidth: 0,
    width:"90%"
  },
  categoryWrapper: {
    padding: 15,
  },
  footerContainer: {
    margin: 15,
    padding: 5,
    flexDirection: "row",
    borderRadius: 6,
    alignItems: "center",
    borderColor: "gray",
    borderWidth:1
    
  },
  footerImage: {
    height: 70,
    width: 50,
    borderRadius: 6,
    marginRight: 10
  }
}