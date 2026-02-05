class PaymentUrlGenerator {
  static generateKakaoPayUrl(kakaoPayId, amount) {
    if (!kakaoPayId || !Number.isFinite(amount) || amount <= 0) {
      return null;
    }

    const baseUrl = 'https://qr.kakaopay.com';

    // amount를 19비트 왼쪽 시프트 후 16진수 문자열로 변환
    const shifted = amount << 19;
    const hexValue = shifted.toString(16);

    return `${baseUrl}/${kakaoPayId}${hexValue}`;
  }

  static generateTossUrl(amount, bankName, accountNumber) {
    if (
      !Number.isFinite(amount) ||
      amount <= 0 ||
      !bankName ||
      !accountNumber
    ) {
      return null;
    }

    const encodedBank = encodeURIComponent(bankName);
    const encodedAccountNo = encodeURIComponent(accountNumber);

    return `supertoss://send?amount=${amount}&bank=${encodedBank}&accountNo=${encodedAccountNo}`;
  }
}

module.exports = PaymentUrlGenerator;
