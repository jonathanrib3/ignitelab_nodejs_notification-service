import { Content } from './content';
import { Notification } from './Notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content(
        'PARABÉNS VOCÊ FOI SORTEADO PARA GANHAR UM IPHONE 16 DE GRAÇA!! CLIQUE AQUI PARA PEGAR SEU PREMIO!!!',
      ),
      category: 'Spam',
      recipientId: 'insira-um-id',
    });

    expect(notification).toBeTruthy();
  });
});
