interface CornerPoint {
    x: number,
    y: number,
    letter: string,
}

interface GlasInfo{
    Tykkelse: string
    Belægning: string
    ProfilRamme: string
    EndeKappe: string

}

interface CartItem{
    glasPoints: CornerPoint[]
    glasInfo: GlasInfo
}

