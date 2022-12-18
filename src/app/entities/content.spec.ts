import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content(
      'PARABÉNS VOCÊ FOI SORTEADO PARA GANHAR UM IPHONE 16 DE GRAÇA!! CLIQUE AQUI PARA PEGAR SEU PREMIO!!!',
    );

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => {
      new Content('PARA');
    }).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => {
      new Content('PARA'.repeat(61));
    }).toThrow();
  });
});
