import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import Header from '../../../components/Header'
import SearchBar from '../../../components/SearchBar';
import TaskCard from '../../../components/TaskCard';
import TaskCategory from '../../../components/TaskCategory';
import AddTask from '../../../components/AddTask';

const Home = () => {
    return (
        <SafeAreaView>
            <Header />

            {/* Search */}
            <SearchBar
                placeholder="Search for a task"
                onChangeText={(text) => handleSearch(text)}
            />

            {/* Task Groups */}
            <TaskCard />

            {/* Category */}
            <View>
                {/* <TaskCategory />task 1 */}
            </View>

            {/* Add Task */}
            <AddTask />
        </SafeAreaView>
        
    )
}

export default Home;

   // <SafeAreaView>
    //   {/* Header */}
    //   <View>
    //     <Header />
    //   </View>
    //   {/* Search */}
    //   <View>
    //   </View>
    //   {/* Tasks */}
    //   {/* Category */}
    //   <View>
    //     <Text>Category</Text>
    //     <TaskList title={'sleep'} />
    //     <TaskList title={'eat'} />
    //   </View>
    //   {/* AddNew */}
    //   <AddTask />
    // </SafeAreaView>