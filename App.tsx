import { StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <></>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    rowGap: 12,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
