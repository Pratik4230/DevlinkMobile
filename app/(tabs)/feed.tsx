import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/utils/api';
import ThemedText from '@/components/UI/ThemedText';
import ThemedView from '@/components/UI/ThemedView';

const feed = () => {

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);


  const {data:feed , isLoading, isError} = useQuery({
    queryKey: ["feed", limit, page],
    queryFn: async () => {
      const response = await api.get(`/user/feed?page=${page}&limit=${limit}`);
      return response.data
    }
  })

  const renderFeed = ({item}: any) => {
    return (
      <ThemedView>
<ThemedText > Helllllllllllo {item._id} </ThemedText>
      </ThemedView>
    ) 
  }

  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  console.log("feed : ", feed);
  

  return (
    <FlatList 
    data={feed.data}
    renderItem={renderFeed}
    keyExtractor={(item) => item._id}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.postlist}
    

    />
  )
}

export default feed

const styles = StyleSheet.create({
  postlist: {
    backgroundColor: "black"
  }
})