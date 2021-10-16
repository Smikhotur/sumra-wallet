export interface PioneerState {
  activeUpdrade: boolean;
  activePay: boolean;
  activeBasic: boolean;
  activeBronze: boolean;
  activeSilver: boolean;
  activeGold: boolean;
  nameBronzeBtn: string;
  nameSilverBtn: string;
  nameGoldBtn: string;
}

export interface PioneerAction {
  activeUpdrade: boolean;
  activePay: boolean;
  activeBasic: boolean;
  activeBronze: boolean;
  activeSilver: boolean;
  activeGold: boolean;
  nameBronzeBtn: string;
  nameSilverBtn: string;
  nameGoldBtn: string;
  type: string;
}

export interface FancActiveUpdradeButton {
  type: string;
  activeUpdrade: boolean;
}

export interface FancActivePayButton {
  type: string;
  activePay: boolean;
}

export interface FancActiveBasicButton {
  type: string;
  activeBasic: boolean;
}

export interface FancActiveBronzeButton {
  type: string;
  activeBronze: boolean;
}

export interface FancActiveSilverButton {
  type: string;
  activeSilver: boolean;
}

export interface FancActiveGoldButton {
  type: string;
  activeGold: boolean;
}

export interface FancNameBronzeButton {
  type: string;
  nameBronzeBtn: string;
}

export interface FancNameSilverButton {
  type: string;
  nameSilverBtn: string;
}

export interface FancNameGoldButton {
  type: string;
  nameGoldBtn: string;
}
