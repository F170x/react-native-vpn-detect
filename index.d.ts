// Type definitions for react-native-vpn-detect
// Project: https://github.com/archriss/react-native-vpn-detect
// Definitions by: Kevin.Oh <https://github.com/giftsets>

export interface Security {
    detectVPN(): Promise<boolean>;
    detectProxy(): Promise<boolean>;
}

declare const Security: Security;

export default Security;