SLOT_TYPE_CATCHER = 'C';
SLOT_TYPE_FIRST = '1B';
SLOT_TYPE_SECOND = '2B';
SLOT_TYPE_THIRD = '3B';
SLOT_TYPE_SHORTSTOP = 'SS';
SLOT_TYPE_LEFT = 'LF';
SLOT_TYPE_CENTER = 'CF';
SLOT_TYPE_RIGHT = 'RF';
SLOT_TYPE_STARTER = 'SP';
SLOT_TYPE_RELIEF = 'RP';
SLOT_TYPE_DH = 'DH';
SLOT_TYPE_UTILITY = 'UTIL';
SLOT_TYPE_BENCH = 'Bench';
SLOT_TYPE_IL = 'IL';


POSITION_SLOT_MAPPING = {
    'C': [SLOT_TYPE_CATCHER, SLOT_TYPE_UTILITY],
    '1B': [SLOT_TYPE_FIRST, SLOT_TYPE_UTILITY],
    '2B': [SLOT_TYPE_SECOND, SLOT_TYPE_UTILITY],
    '3B': [SLOT_TYPE_THIRD, SLOT_TYPE_UTILITY],
    'SS': [SLOT_TYPE_SHORTSTOP, SLOT_TYPE_UTILITY],
    'LF': [SLOT_TYPE_LEFT, SLOT_TYPE_UTILITY],
    'CF': [SLOT_TYPE_CENTER, SLOT_TYPE_UTILITY],
    'RF': [SLOT_TYPE_RIGHT, SLOT_TYPE_UTILITY],
    'DH': [SLOT_TYPE_DH],
    'SP': [SLOT_TYPE_STARTER],
    'RP': [SLOT_TYPE_RELIEF]
}

function parseSlotType(text) {
    switch (text) {
        case 'C': return SLOT_TYPE_CATCHER;
        case '1B': return SLOT_TYPE_FIRST;
        case '2B': return SLOT_TYPE_SECOND;
        case '3B': return SLOT_TYPE_THIRD;
        case 'SS': return SLOT_TYPE_SHORTSTOP;
        case 'LF': return SLOT_TYPE_LEFT;
        case 'CF': return SLOT_TYPE_CENTER;
        case 'RF': return SLOT_TYPE_RIGHT;
        case 'DH': return SLOT_TYPE_DH;
        case 'UTIL': return SLOT_TYPE_UTILITY;
        case 'SP': return SLOT_TYPE_STARTER;
        case 'RP': return SLOT_TYPE_RELIEF;
        case 'Bench': return SLOT_TYPE_BENCH;
        case 'IL': return SLOT_TYPE_IL;
    }
}
