# Plantilla d'exemple VitePress

Benvingut! Aquesta pàgina és una plantilla de demostració que mostra la varietat d'elements que pots utilitzar en la teua documentació amb VitePress.

---

## Títols i seccions

# Títol nivell 1

## Títol nivell 2

### Títol nivell 3

---

## Llistes

- Element de llista
- Un altre element
  - Sub-element

1. Element numerat
2. Segon element

---

## Taula

| Nom          | Tipus        | Valor        |
|--------------|--------------|-------------|
| edat         | numèric      | 30          |
| IVA          | numèric      | 0.21        |
| DOMINI_GMAIL | alfanumèric  | "gmail.com" |

---

## Bloc de codi

```plaintext
- Nom de la dada: edat
- Tipus de dada: numèric
- Valor de la dada: 30
```

```md
<script setup>
import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()
</script>
```

---

## Imatge

![Logo CC](/img/logo-cc.png){logo}

---

## Bloc de cita

> Exemple de cita: "Els programes són com receptes detallades que li diuen a l'ordinador exactament què fer."

---

## Bloc d'informació

::: info
Aquesta és una caixa d'informació.
:::

::: tip
Aquesta és una caixa de consell.
:::

::: warning
Aquesta és una caixa d'avís.
:::

::: danger
Aquesta és una caixa de perill.
:::

---

## Detalls expandibles

::: details Exemple de detalls
Aquesta secció es pot expandir per mostrar més informació.
:::

---

## Tabs

:::tabs
@tab Algoritme A

```plaintext
INICI
  1. Escriure "Introdueix valor per a n".
  2. Llegir n.
  3. Si n = 2 escriure "És parell"
  4. Si no, si n = 1 escriure "És imparell"
  5. Si no, n = n - 2 i tornem al pas 3.
FI
```

@tab Algoritme B

```plaintext
INICI
  1. Escriure "Introdueix valor per a n".
  2. Llegir n.
  3. M ← n % 2
  4. Si M = 0, escriure "És parell"
  5. Si no, escriure "És imparell"
FI
```

:::

---

## Objectius (llista de fites)

- Comprendre el que és un algoritme.
- Identificar i crear algoritmes en la vida real.
- Conèixer el cicle de vida d’un programa.
- Comprendre com es representen els algoritmes.
- Conèixer els elements bàsics d’un algoritme i el seu significat.
- Saber avaluar expressions i operadors.

---

## Exercicis (llista d'exemples)

- Preparar un batut de fruites
- Fer la compra al supermercat
- Fer una pizza casolana
- Llençar la brossa
- Preparar un esmorzar
- Instal·lar una aplicació al telèfon
- Rentar la roba
- Coure arròs
- Llegir un llibre
- Fer una trucada telefònica

---

## Enllaç a la documentació de l'API

Consulta la [documentació de l'API de VitePress](https://vitepress.dev/reference/runtime-api#usedata).

---

Aquesta plantilla mostra la majoria d'elements que pots utilitzar en la teua documentació. Pots eliminar o modificar lliurement aquest contingut.
