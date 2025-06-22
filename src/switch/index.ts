// TypeScript Switch文の練習例

// 1. 基本的なswitch文
function getDayName(dayNumber: number): string {
  switch (dayNumber) {
    case 1:
      return "月曜日";
    case 2:
      return "火曜日";
    case 3:
      return "水曜日";
    case 4:
      return "木曜日";
    case 5:
      return "金曜日";
    case 6:
      return "土曜日";
    case 7:
      return "日曜日";
    default:
      return "無効な日付";
  }
}

// 2. 複数のケースをまとめる例
function getSeason(month: number): string {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "冬";
    case 3:
    case 4:
    case 5:
      return "春";
    case 6:
    case 7:
    case 8:
      return "夏";
    case 9:
    case 10:
    case 11:
      return "秋";
    default:
      return "無効な月";
  }
}

// 3. enumを使ったswitch文
// enum UserRole {
//   ADMIN = "admin",
//   USER = "user",
//   GUEST = "guest",
//   MODERATOR = "moderator"
// }

// enumの代替: as const + Union型
const UserRole = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
  MODERATOR: "moderator"
} as const;

type UserRole = typeof UserRole[keyof typeof UserRole];

function getRolePermissions(role: UserRole): string[] {
  switch (role) {
    case UserRole.ADMIN:
      return ["read", "write", "delete", "manage_users"];
    case UserRole.MODERATOR:
      return ["read", "write", "moderate"];
    case UserRole.USER:
      return ["read", "write"];
    case UserRole.GUEST:
      return ["read"];
    default:
      return [];
  }
}

// 4. 文字列を使ったswitch文
function getHttpStatusMessage(statusCode: string): string {
  switch (statusCode) {
    case "200":
      return "OK";
    case "201":
      return "Created";
    case "400":
      return "Bad Request";
    case "401":
      return "Unauthorized";
    case "404":
      return "Not Found";
    case "500":
      return "Internal Server Error";
    default:
      return "Unknown Status";
  }
}

// 5. 計算を含むswitch文
function calculateDiscount(customerType: string, purchaseAmount: number): number {
  let discountRate: number;
  
  switch (customerType) {
    case "premium":
      discountRate = 0.20; // 20%割引
      break;
    case "regular":
      discountRate = 0.10; // 10%割引
      break;
    case "new":
      discountRate = 0.05; // 5%割引
      break;
    default:
      discountRate = 0;
  }
  
  return purchaseAmount * discountRate;
}

// 6. 複雑な条件を含むswitch文
function getShippingInfo(country: string, weight: number): { cost: number; days: number } {
  switch (country) {
    case "JP":
      if (weight <= 1) {
        return { cost: 500, days: 1 };
      } else if (weight <= 5) {
        return { cost: 800, days: 2 };
      } else {
        return { cost: 1200, days: 3 };
      }
    case "US":
      if (weight <= 1) {
        return { cost: 1500, days: 5 };
      } else if (weight <= 5) {
        return { cost: 2500, days: 7 };
      } else {
        return { cost: 3500, days: 10 };
      }
    case "EU":
      if (weight <= 1) {
        return { cost: 1200, days: 4 };
      } else if (weight <= 5) {
        return { cost: 2000, days: 6 };
      } else {
        return { cost: 2800, days: 8 };
      }
    default:
      return { cost: 3000, days: 14 };
  }
}

// 使用例
console.log("=== Switch文の練習例 ===");

console.log("1. 曜日の取得:");
console.log(`1日目: ${getDayName(1)}`);
console.log(`7日目: ${getDayName(7)}`);
console.log(`無効: ${getDayName(10)}`);

console.log("\n2. 季節の取得:");
console.log(`1月: ${getSeason(1)}`);
console.log(`4月: ${getSeason(4)}`);
console.log(`7月: ${getSeason(7)}`);
console.log(`10月: ${getSeason(10)}`);

console.log("\n3. 権限の取得:");
console.log(`管理者: ${getRolePermissions(UserRole.ADMIN)}`);
console.log(`ユーザー: ${getRolePermissions(UserRole.USER)}`);
console.log(`ゲスト: ${getRolePermissions(UserRole.GUEST)}`);

console.log("\n4. HTTPステータス:");
console.log(`200: ${getHttpStatusMessage("200")}`);
console.log(`404: ${getHttpStatusMessage("404")}`);
console.log(`500: ${getHttpStatusMessage("500")}`);

console.log("\n5. 割引計算:");
console.log(`プレミアム会員 10000円: ${calculateDiscount("premium", 10000)}円割引`);
console.log(`一般会員 10000円: ${calculateDiscount("regular", 10000)}円割引`);
console.log(`新規会員 10000円: ${calculateDiscount("new", 10000)}円割引`);

console.log("\n6. 配送情報:");
console.log(`日本 0.5kg:`, getShippingInfo("JP", 0.5));
console.log(`アメリカ 2kg:`, getShippingInfo("US", 2));
console.log(`EU 8kg:`, getShippingInfo("EU", 8));

// export {
//   getDayName,
//   getSeason,
//   getRolePermissions,
//   getHttpStatusMessage,
//   calculateDiscount,
//   getShippingInfo,
//   UserRole
// };
