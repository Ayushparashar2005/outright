import { addSystemMessage } from '../store/cartStore';

export const shareProduct = (productId: string) => {
  if (typeof window !== 'undefined') {
    const url = `${window.location.origin}/?highlight=${productId}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        addSystemMessage('LINK COPIED TO CLIPBOARD');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        addSystemMessage('!! FAILED TO COPY LINK');
      });
  }
};
