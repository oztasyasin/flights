import { QueryClient, QueryClientProvider } from 'react-query';
import RoutesContainer from './src/routes/RoutesContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFontsLoader } from './src/hooks/useFontsLoader';
import Toast from 'react-native-toast-message';
import CustomToaster from './src/components/toaster';

const queryClient = new QueryClient();
const toastConfig = {
  success: (props) => <CustomToaster {...props} type={"success"} />,
  error: (props) => <CustomToaster {...props} type={"error"} />,
}
export default function App() {

  const { loaded, error } = useFontsLoader();

  if (!loaded && !error) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RoutesContainer />
        <Toast
          config={toastConfig}
          position='bottom' />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}