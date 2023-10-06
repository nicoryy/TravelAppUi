import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation';

export default function App() {
  return (
    <>
    <StatusBar animated={true}/>
    <AppNavigation/>
    </>
  );
}

