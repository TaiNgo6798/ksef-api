- Uwierzytelnianie
  - Uzyskiwanie dostępu
    - postInicjalizacja uwierzytelnienia
    - postUwierzytelnienie z wykorzystaniem podpisu XAdES
    - postUwierzytelnienie z wykorzystaniem tokena KSeF
    - getPobranie statusu uwierzytelniania
    - postPobranie tokenów dostępowych
    - postOdświeżenie tokena dostępowego
  - Aktywne sesje
    - getPobranie listy aktywnych sesji
    - delUnieważnienie aktualnej sesji uwierzytelnienia
    - delUnieważnienie sesji uwierzytelnienia
- Limity i ograniczenia
  - Limity i ograniczenia
    - getPobranie limitów dla bieżącego kontekstu
    - getPobranie limitów dla bieżącego podmiotu
    - getPobranie aktualnie obowiązujących limitów API
    - postZmiana limitów sesji dla bieżącego kontekstu
    - delPrzywrócenie domyślnych wartości limitów sesji dla bieżącego kontekstu
    - postZmiana limitów certyfikatów dla bieżącego podmiotu
    - delPrzywrócenie domyślnych wartości limitów certyfikatów dla bieżącego podmiotu
    - postZmiana limitów API dla bieżącego kontekstu
    - delPrzywrócenie domyślnych wartości limitów API dla bieżącego kontekstu
    - postZmiana limitów API dla bieżącego kontekstu na wartości produkcyjne
- Szyfrowanie danych
  - Certyfikaty klucza publicznego
    - getPobranie certyfikatów
- Faktury
  - Wysyłka interaktywna
    - postOtwarcie sesji interaktywnej
    - postWysłanie faktury
    - postZamknięcie sesji interaktywnej
  - Wysyłka wsadowa
    - postOtwarcie sesji wsadowej
    - postZamknięcie sesji wsadowej
  - Status wysyłki i UPO
    - getPobranie listy sesji
    - getPobranie statusu sesji
    - getPobranie faktur sesji
    - getPobranie statusu faktury z sesji
    - getPobranie niepoprawnie przetworzonych faktur sesji
    - getPobranie UPO faktury z sesji na podstawie numeru KSeF
    - getPobranie UPO faktury z sesji na podstawie numeru referencyjnego faktury
    - getPobranie UPO dla sesji
  - Pobieranie faktur
    - getPobranie faktury po numerze KSeF
    - postPobranie listy metadanych faktur
    - postEksport paczki faktur
    - getPobranie statusu eksportu paczki faktur
- Uprawnienia
  - Nadawanie uprawnień
    - postNadanie osobom fizycznym uprawnień do pracy w KSeF
    - postNadanie podmiotom uprawnień do obsługi faktur
    - postNadanie uprawnień podmiotowych
    - postNadanie uprawnień w sposób pośredni
    - postNadanie uprawnień administratora podmiotu podrzędnego
    - postNadanie uprawnień administratora podmiotu unijnego
    - postNadanie uprawnień reprezentanta podmiotu unijnego
  - Odbieranie uprawnień
    - delOdebranie uprawnień
    - delOdebranie uprawnień podmiotowych
  - Wyszukiwanie nadanych uprawnień
    - postPobranie listy własnych uprawnień
    - postPobranie listy uprawnień do pracy w KSeF nadanych osobom fizycznym lub podmiotom
    - postPobranie listy uprawnień administratorów jednostek i podmiotów podrzędnych
    - getPobranie listy ról podmiotu
    - postPobranie listy podmiotów podrzędnych
    - postPobranie listy uprawnień podmiotowych do obsługi faktur
    - postPobranie listy uprawnień administratorów lub reprezentantów podmiotów unijnych uprawnionych do samofakturowania
  - Operacje
    - getPobranie statusu operacji
    - getSprawdzenie statusu zgody na wystawianie faktur z załącznikiem
- Certyfikaty
  - Certyfikaty
    - getPobranie danych o limitach certyfikatów
    - getPobranie danych do wniosku certyfikacyjnego
    - postWysyłka wniosku certyfikacyjnego
    - getPobranie statusu przetwarzania wniosku certyfikacyjnego
    - postPobranie certyfikatu lub listy certyfikatów
    - postUnieważnienie certyfikatu
    - postPobranie listy metadanych certyfikatów
- Tokeny KSeF
  - Tokeny KSeF
    - postWygenerowanie nowego tokena
    - getPobranie listy wygenerowanych tokenów
    - getPobranie statusu tokena
    - delUnieważnienie tokena
- Usługi Peppol
  - Usługi Peppol
    - getPobranie listy dostawców usług Peppol
- Dane testowe
  - Dane testowe
    - postUtworzenie podmiotu
    - postUsunięcie podmiotu
    - postUtworzenie osoby fizycznej
    - postUsunięcie osoby fizycznej
    - postNadanie uprawnień testowemu podmiotowi/osobie fizycznej
    - postOdebranie uprawnień testowemu podmiotowi/osobie fizycznej
    - postUmożliwienie wysyłania faktur z załącznikiem
    - postOdebranie możliwości wysyłania faktur z załącznikiem

[![redocly logo](https://cdn.redoc.ly/redoc/logo-mini.svg)API docs by Redocly](https://redocly.com/redoc/)

# KSeF API TE (v2)

Download OpenAPI specification: [Download](https://ksef-test.mf.gov.pl/docs/v2/openapi.json)

**Wersja API:** 2.0.0 (build 2.0.0-rc6.0-te-20251203.3+3884e4edd60697b01d1b0d3b1cc5aecd60174f51)

**Klucze publiczne** Ministerstwa Finansów (dla danego środowiska): [Pobierz klucze](https://ksef-test.mf.gov.pl/docs/v2/index.html#tag/Certyfikaty-klucza-publicznego)

**Historia zmian:** [Changelog](https://github.com/CIRFMF/ksef-docs/blob/main/api-changelog.md)

**Rozszerzona dokumentacja API:** [ksef-docs](https://github.com/CIRFMF/ksef-docs/tree/main)

## [tag/Uzyskiwanie-dostepu](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Uzyskiwanie-dostepu) Uzyskiwanie dostępu

Uwierzytelnianie w systemie KSeF API 2.0 jest obowiązkowym etapem, który należy wykonać przed dostępem do chronionych zasobów systemu. Proces ten oparty jest na **uzyskaniu tokenu dostępu** (`accessToken`) w formacie `JWT`, który następnie wykorzystywany jest do autoryzacji operacji API.

> Więcej informacji:
>
> - [Uwierzytelnianie](https://github.com/CIRFMF/ksef-docs/blob/main/uwierzytelnianie.md)

## [tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1challenge/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1challenge/post) Inicjalizacja uwierzytelnienia

Generuje unikalny challenge wymagany w kolejnym kroku operacji uwierzytelnienia.

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| challenge<br>required | string (Challenge)  = 36 characters <br>Unikalny challenge. |
| timestamp<br>required | string <date-time> <br>Czas wygenerowania challenge-a. |

**400**

Bad Request

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 60 | - | - | - |

post/api/v2/auth/challenge

https://ksef-test.mf.gov.pl/api/v2/auth/challenge

### Response samples

- 200
- 400

Content type

application/json

Copy

`{"challenge": "20250514-CR-226FB7B000-3ACF9BE4C0-10",

"timestamp": "2025-07-11T12:23:56.0154302+00:00"

}`

## [tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1xades-signature/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1xades-signature/post) Uwierzytelnienie z wykorzystaniem podpisu XAdES

Rozpoczyna operację uwierzytelniania za pomocą dokumentu XML podpisanego podpisem elektronicznym XAdES.

> Więcej informacji:
>
> - [Przygotowanie dokumentu XML](https://github.com/CIRFMF/ksef-docs/blob/main/uwierzytelnianie.md#1-przygotowanie-dokumentu-xml-authtokenrequest)
> - [Podpis dokumentu XML](https://github.com/CIRFMF/ksef-docs/blob/main/uwierzytelnianie.md#2-podpisanie-dokumentu-xades)
> - [Schemat XSD](https://ksef-test.mf.gov.pl/docs/v2/schemas/authv2.xsd)

##### query Parameters

|     |     |
| --- | --- |
| verifyCertificateChain | boolean<br>Wymuszenie weryfikacji zaufania łańcucha certyfikatu wraz ze sprawdzeniem statusu certyfikatu (OCSP/CRL) na środowiskach które umożliwiają wykorzystanie samodzielnie wygenerowanych certyfikatów. |

##### Request Body schema: application/xml  required

string

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny sesji uwierzytelnienia. |
| authenticationToken<br>required | object<br>Token operacji uwierzytelnienia. |

**400**

Bad Request

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 60 | - | - | - |

post/api/v2/auth/xades-signature

https://ksef-test.mf.gov.pl/api/v2/auth/xades-signature

### Request samples

- Payload

Content type

application/xml

Copy

```
<?xml version="1.0" encoding="utf-8"?>
<AuthTokenRequest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://ksef.mf.gov.pl/auth/token/2.0">
    <Challenge>20250625-CR-20F5EE4000-DA48AE4124-46</Challenge>
    <ContextIdentifier>
        <Nip>5265877635</Nip>
    </ContextIdentifier>
    <SubjectIdentifierType>certificateSubject</SubjectIdentifierType>
    <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="Signature-9707709">
        <!-- Tu powinien być podpis XAdES -->
    </ds:Signature>
</AuthTokenRequest>
```

### Response samples

- 202
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"referenceNumber": "20250514-AU-2DFC46C000-3AC6D5877F-D4",

"authenticationToken": {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbi10eXBlIjoiT3BlcmF0aW9uVG9rZW4iLCJvcGVyYXRpb24tcmVmZXJlbmNlLW51bWJlciI6IjIwMjUwNTE0LUFVLTJERkM0NkMwMDAtM0FDNkQ1ODc3Ri1ENCIsImV4cCI6MTc0NzIzMTcxOSwiaWF0IjoxNzQ3MjI5MDE5LCJpc3MiOiJrc2VmLWFwaS10aSIsImF1ZCI6ImtzZWYtYXBpLXRpIn0.rtRcV2mR9SiuJwpQaQHsbAXvvVsdNKG4DJsdiJctIeU",

"validUntil": "2025-07-11T12:23:56.0154302+00:00"

}

}`

## [tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1ksef-token/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1ksef-token/post) Uwierzytelnienie z wykorzystaniem tokena KSeF

Rozpoczyna operację uwierzytelniania z wykorzystaniem wcześniej wygenerowanego tokena KSeF.

Token KSeF wraz z timestampem ze wcześniej wygenerowanego challenge'a (w formacie `token|timestamp`) powinien zostać zaszyfrowany dedykowanym do tego celu kluczem publicznym.

- Timestamp powinien zostać przekazany jako **liczba milisekund od 1 stycznia 1970 roku (Unix timestamp)**.
- Algorytm szyfrowania: **RSA-OAEP (z użyciem SHA-256 jako funkcji skrótu)**.

##### Request Body schema: application/json

|     |     |
| --- | --- |
| challenge<br>required | string = 36 characters <br>Wygenerowany wcześniej challenge. |
| contextIdentifier<br>required | object<br>Indentyfikator kontekstu do którego następuje uwierzytelnienie. |
| encryptedToken<br>required | string <byte> <br>Zaszyfrowany token wraz z timestampem z challenge'a, w formacie `token|timestamp`. |
| authorizationPolicy | object or null<br>Polityka autoryzacji żądań przy każdym użyciu tokena dostępu. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny sesji uwierzytelnienia. |
| authenticationToken<br>required | object<br>Token operacji uwierzytelnienia. |

**400**

Bad Request

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 60 | - | - | - |

post/api/v2/auth/ksef-token

https://ksef-test.mf.gov.pl/api/v2/auth/ksef-token

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"challenge": "20250625-CR-2FDC223000-C2BFC98A9C-4E",

"contextIdentifier": {"type": "Nip",

"value": "5265877635"

},

"encryptedToken": "..."

}`

### Response samples

- 202
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"referenceNumber": "20250514-AU-2DFC46C000-3AC6D5877F-D4",

"authenticationToken": {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbi10eXBlIjoiT3BlcmF0aW9uVG9rZW4iLCJvcGVyYXRpb24tcmVmZXJlbmNlLW51bWJlciI6IjIwMjUwNTE0LUFVLTJERkM0NkMwMDAtM0FDNkQ1ODc3Ri1ENCIsImV4cCI6MTc0NzIzMTcxOSwiaWF0IjoxNzQ3MjI5MDE5LCJpc3MiOiJrc2VmLWFwaS10aSIsImF1ZCI6ImtzZWYtYXBpLXRpIn0.rtRcV2mR9SiuJwpQaQHsbAXvvVsdNKG4DJsdiJctIeU",

"validUntil": "2025-07-11T12:23:56.0154302+00:00"

}

}`

## [tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1{referenceNumber}/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1{referenceNumber}/get) Pobranie statusu uwierzytelniania

Sprawdza bieżący status operacji uwierzytelniania dla podanego tokena.

Sposób uwierzytelnienia: `AuthenticationToken` otrzymany przy rozpoczęciu operacji uwierzytelniania.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny tokena otrzymanego przy inicjalizacji operacji uwierzytelniania. |

### Responses

**200**

OK

##### Response Schema: application/json

| startDate<br>required | string <date-time> <br>Data rozpoczęcia operacji uwierzytelnienia. |
| authenticationMethod<br>required | string

Enum:"Token""TrustedProfile""InternalCertificate""QualifiedSignature""QualifiedSeal""PersonalSignature""PeppolSignature"

Metoda uwierzytelnienia.

| Wartość | Opis |
| --- | --- |
| Token | Token KSeF. |
| TrustedProfile | Profil Zaufany. |
| InternalCertificate | Certyfikat KSeF. |
| QualifiedSignature | Podpis kwalifikowany. |
| QualifiedSeal | Pieczęć kwalifikowana. |
| PersonalSignature | Podpis osobisty. |
| PeppolSignature | Podpis dostawcy uslug Peppol. | |
| status<br>required | object

Informacje o aktualnym statusie.

| Code | Description | Details |
| --- | --- | --- |
| 100 | Uwierzytelnianie w toku | - |
| 200 | Uwierzytelnianie zakończone sukcesem | - |
| 415 | Uwierzytelnianie zakończone niepowodzeniem | Brak przypisanych uprawnień |
| 425 | Uwierzytelnienie unieważnione | Uwierzytelnienie i powiązane refresh tokeny zostały unieważnione przez użytkownika |
| 450 | Uwierzytelnianie zakończone niepowodzeniem z powodu błędnego tokenu | Nieprawidłowy token |
| 450 | Uwierzytelnianie zakończone niepowodzeniem z powodu błędnego tokenu | Nieprawidłowy czas tokena |
| 450 | Uwierzytelnianie zakończone niepowodzeniem z powodu błędnego tokenu | Token unieważniony |
| 450 | Uwierzytelnianie zakończone niepowodzeniem z powodu błędnego tokenu | Token nieaktywny |
| 460 | Uwierzytelnianie zakończone niepowodzeniem z powodu błędu certyfikatu | Nieważny certyfikat |
| 460 | Uwierzytelnianie zakończone niepowodzeniem z powodu błędu certyfikatu | Błąd weryfikacji łańcucha certyfikatów |
| 460 | Uwierzytelnianie zakończone niepowodzeniem z powodu błędu certyfikatu | Niezaufany łańcuch certyfikatów |
| 460 | Uwierzytelnianie zakończone niepowodzeniem z powodu błędu certyfikatu | Certyfikat odwołany |
| 460 | Uwierzytelnianie zakończone niepowodzeniem z powodu błędu certyfikatu | Niepoprawny certyfikat |
| 470 | Uwierzytelnianie zakończone niepowodzeniem | Próba wykorzystania metod autoryzacyjnych osoby zmarłej |
| 500 | Nieznany błąd | - |
| 550 | Operacja została anulowana przez system | Przetwarzanie zostało przerwane z przyczyn wewnętrznych systemu. Spróbuj ponownie | |
| isTokenRedeemed | boolean or null<br>Czy został już wydany refresh token powiązany z danym uwierzytelnieniem. |
| lastTokenRefreshDate | string or null <date-time> <br>Data ostatniego odświeżenia tokena. |
| refreshTokenValidUntil | string or null <date-time> <br>Termin ważności refresh tokena (o ile nie zostanie wcześniej unieważniony). |

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 60 | - | - | - |

get/api/v2/auth/{referenceNumber}

https://ksef-test.mf.gov.pl/api/v2/auth/{referenceNumber}

### Response samples

- 200
- 400

Content type

application/json

Example

Kod 100 \| Uwierzytelnianie w tokuKod 200 \| Uwierzytelnianie zakończone sukcesemKod 400 \| Uwierzytelnianie zakończone niepowodzeniem \| Nieważny certyfikatKod 400 \| Uwierzytelnianie zakończone niepowodzeniem \| Błąd weryfikacji łańcucha certyfikatówKod 400 \| Uwierzytelnianie zakończone niepowodzeniem \| Niezaufany łańcuch certyfikatówKod 400 \| Uwierzytelnianie zakończone niepowodzeniem \| Certyfikat odwołanyKod 400 \| Uwierzytelnianie zakończone niepowodzeniem \| Niepoprawny certyfikatKod 500 \| Nieznany błądKod 100 \| Uwierzytelnianie w toku

Copy
Expand all  Collapse all

`{"startDate": "0001-01-01T00:00:00+00:00",

"authenticationMethod": "Token",

"status": {"code": 100,

"description": "Uwierzytelnianie w toku"

}

}`

## [tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1token~1redeem/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1token~1redeem/post) Pobranie tokenów dostępowych

Pobiera parę tokenów (access token i refresh token) wygenerowanych w ramach pozytywnie zakończonego procesu uwierzytelniania.
**Tokeny można pobrać tylko raz.**

Sposób uwierzytelnienia: `AuthenticationToken` otrzymany przy rozpoczęciu operacji uwierzytelniania.

##### Authorizations:

_Bearer_

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| accessToken<br>required | object<br>Token dostępu. |
| refreshToken<br>required | object<br>Token umożliwiający odświeżenie tokenu dostępu.<br>> Więcej informacji:<br>> <br>> - [Odświeżanie tokena](https://github.com/CIRFMF/ksef-docs/blob/main/uwierzytelnianie.md#od%C5%9Bwie%C5%BCenie-tokena-accesstoken) |

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 60 | - | - | - |

post/api/v2/auth/token/redeem

https://ksef-test.mf.gov.pl/api/v2/auth/token/redeem

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"accessToken": {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbi10eXBlIjoiQ29udGV4dFRva2VuIiwiY29udGV4dC1pZGVudGlmaWVyLXR5cGUiOiJOaXAiLCJjb250ZXh0LWlkZW50aWZpZXItdmFsdWUiOiIzNzU2OTc3MDQ5IiwiYXV0aGVudGljYXRpb24tbWV0aG9kIjoiUXVhbGlmaWVkU2VhbCIsInN1YmplY3QtZGV0YWlscyI6IntcIlN1YmplY3RJZGVudGlmaWVyXCI6e1wiVHlwZVwiOlwiTmlwXCIsXCJWYWx1ZVwiOlwiMzc1Njk3NzA0OVwifX0iLCJleHAiOjE3NDcyMjAxNDksImlhdCI6MTc0NzIxOTI0OSwiaXNzIjoia3NlZi1hcGktdGkiLCJhdWQiOiJrc2VmLWFwaS10aSJ9.R_3_R2PbdCk8T4WP_0XGOO1iVNu2ugNxmkDvsD0soIE",

"validUntil": "2025-07-11T12:23:56.0154302+00:00"

},

"refreshToken": {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbi10eXBlIjoiQ29udGV4dFRva2VuIiwiY29udGV4dC1pZGVudGlmaWVyLXR5cGUiOiJOaXAiLCJjb250ZXh0LWlkZW50aWZpZXItdmFsdWUiOiIzNzU2OTc3MDQ5IiwiYXV0aGVudGljYXRpb24tbWV0aG9kIjoiUXVhbGlmaWVkU2VhbCIsInN1YmplY3QtZGV0YWlscyI6IntcIlN1YmplY3RJZGVudGlmaWVyXCI6e1wiVHlwZVwiOlwiTmlwXCIsXCJWYWx1ZVwiOlwiMzc1Njk3NzA0OVwifX0iLCJleHAiOjE3NDcyMjAxNDksImlhdCI6MTc0NzIxOTI0OSwiaXNzIjoia3NlZi1hcGktdGkiLCJhdWQiOiJrc2VmLWFwaS10aSJ9.R_3_R2PbdCk8T4WP_0XGOO1iVNu2ugNxmkDvsD0soIE",

"validUntil": "2025-07-11T12:23:56.0154302+00:00"

}

}`

## [tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1token~1refresh/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Uzyskiwanie-dostepu/paths/~1api~1v2~1auth~1token~1refresh/post) Odświeżenie tokena dostępowego

Generuje nowy token dostępu na podstawie ważnego refresh tokena.

Sposób uwierzytelnienia: `RefreshToken`.

##### Authorizations:

_Bearer_

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| accessToken<br>required | object<br>Token dostępu, którego należy używać w wywołaniach chronionych zasobów API. |

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 60 | - | - | - |

post/api/v2/auth/token/refresh

https://ksef-test.mf.gov.pl/api/v2/auth/token/refresh

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"accessToken": {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbi10eXBlIjoiQ29udGV4dFRva2VuIiwiY29udGV4dC1pZGVudGlmaWVyLXR5cGUiOiJOaXAiLCJjb250ZXh0LWlkZW50aWZpZXItdmFsdWUiOiIzNzU2OTc3MDQ5IiwiYXV0aGVudGljYXRpb24tbWV0aG9kIjoiUXVhbGlmaWVkU2VhbCIsInN1YmplY3QtZGV0YWlscyI6IntcIlN1YmplY3RJZGVudGlmaWVyXCI6e1wiVHlwZVwiOlwiTmlwXCIsXCJWYWx1ZVwiOlwiMzc1Njk3NzA0OVwifX0iLCJleHAiOjE3NDcyMjAxNDksImlhdCI6MTc0NzIxOTI0OSwiaXNzIjoia3NlZi1hcGktdGkiLCJhdWQiOiJrc2VmLWFwaS10aSJ9.R_3_R2PbdCk8T4WP_0XGOO1iVNu2ugNxmkDvsD0soIE",

"validUntil": "2025-07-11T12:23:56.0154302+00:00"

}

}`

## [tag/Aktywne-sesje](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Aktywne-sesje) Aktywne sesje

## [tag/Aktywne-sesje/paths/~1api~1v2~1auth~1sessions/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Aktywne-sesje/paths/~1api~1v2~1auth~1sessions/get) Pobranie listy aktywnych sesji

Zwraca listę aktywnych sesji uwierzytelnienia.

**Sortowanie:**

- startDate (Desc)

##### Authorizations:

_Bearer_

##### query Parameters

|     |     |
| --- | --- |
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### header Parameters

|     |     |
| --- | --- |
| x-continuation-token | string<br>Token służący do pobrania kolejnej strony wyników. |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| continuationToken | string or null<br>Token służący do pobrania kolejnej strony wyników. Jeśli jest pusty, to nie ma kolejnych stron. |
| items<br>required | Array of objects (AuthenticationListItem) <br>Lista sesji uwierzytelniania. |

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

get/api/v2/auth/sessions

https://ksef-test.mf.gov.pl/api/v2/auth/sessions

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"continuationToken": "W3siY29tcG9zaXRlVG9rZW4iOnsidG9rZW4iOm51bGwsInJhbmdlIjp7Im1pbiI6IjA1QzFFMCIsIm1heCI6IkZGIn19LCJyZXN1bWVWYWx1ZXMiOlsiMjAyNS0xMC0wM1QxMjoxODo0OS4zNDY2ODQ3WiJdLCJyaWQiOiIzeHd0QVBJWDVRRlVoZ0FBQUFBQUJBPT0iLCJza2lwQ291bnQiOjF9XQ==",

"items": [{"referenceNumber": "20251010-AU-19F5E39000-39B5B182BA-B8",\
\
"isCurrent": false,\
\
"startDate": "2025-10-11T12:23:56.0154302+00:00",\
\
"authenticationMethod": "QualifiedSeal",\
\
"status": {"code": 200,\
\
"description": "Uwierzytelnianie zakończone sukcesem"\
\
},\
\
"isTokenRedeemed": true,\
\
"refreshTokenValidUntil": "2025-11-28T09:22:13.388+00:00"\
\
}\
\
]

}`

## [tag/Aktywne-sesje/paths/~1api~1v2~1auth~1sessions~1current/delete](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Aktywne-sesje/paths/~1api~1v2~1auth~1sessions~1current/delete) Unieważnienie aktualnej sesji uwierzytelnienia

Unieważnia sesję powiązaną z tokenem użytym do wywołania tej operacji.

Unieważnienie sesji sprawia, że powiązany z nią refresh token przestaje działać i nie można już za jego pomocą uzyskać kolejnych access tokenów.
**Aktywne access tokeny działają do czasu minięcia ich termin ważności.**

Sposób uwierzytelnienia: `RefreshToken` lub `AccessToken`.

##### Authorizations:

_Bearer_

### Responses

**204**

No Content

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

delete/api/v2/auth/sessions/current

https://ksef-test.mf.gov.pl/api/v2/auth/sessions/current

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Aktywne-sesje/paths/~1api~1v2~1auth~1sessions~1{referenceNumber}/delete](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Aktywne-sesje/paths/~1api~1v2~1auth~1sessions~1{referenceNumber}/delete) Unieważnienie sesji uwierzytelnienia

Unieważnia sesję o podanym numerze referencyjnym.

Unieważnienie sesji sprawia, że powiązany z nią refresh token przestaje działać i nie można już za jego pomocą uzyskać kolejnych access tokenów.
**Aktywne access tokeny działają do czasu minięcia ich termin ważności.**

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji uwierzytelnienia. |

### Responses

**204**

No Content

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

delete/api/v2/auth/sessions/{referenceNumber}

https://ksef-test.mf.gov.pl/api/v2/auth/sessions/{referenceNumber}

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Limity-i-ograniczenia](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia) Limity i ograniczenia

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1limits~1context/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1limits~1context/get) Pobranie limitów dla bieżącego kontekstu

Zwraca wartości aktualnie obowiązujących limitów dla bieżącego kontekstu.

##### Authorizations:

_Bearer_

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| onlineSession<br>required | object<br>Limity dla sesji interaktywnych. |
| batchSession<br>required | object<br>Limity dla sesji wsadowych. |

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

get/api/v2/limits/context

https://ksef-test.mf.gov.pl/api/v2/limits/context

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"onlineSession": {"maxInvoiceSizeInMB": 1,

"maxInvoiceWithAttachmentSizeInMB": 3,

"maxInvoices": 10000

},

"batchSession": {"maxInvoiceSizeInMB": 1,

"maxInvoiceWithAttachmentSizeInMB": 3,

"maxInvoices": 10000

}

}`

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1limits~1subject/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1limits~1subject/get) Pobranie limitów dla bieżącego podmiotu

Zwraca wartoście aktualnie obowiązujących limitów dla bieżącego podmiotu.

##### Authorizations:

_Bearer_

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| enrollment | object or null |
| certificate | object or null |

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

get/api/v2/limits/subject

https://ksef-test.mf.gov.pl/api/v2/limits/subject

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"enrollment": {"maxEnrollments": 6

},

"certificate": {"maxCertificates": 2

}

}`

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1rate-limits/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1rate-limits/get) Pobranie aktualnie obowiązujących limitów API

Zwraca wartości aktualnie obowiązujących limitów ilości żądań przesyłanych do API.

##### Authorizations:

_Bearer_

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| onlineSession<br>required | object<br>Limity dla otwierania/zamykania sesji interaktywnych. |
| batchSession<br>required | object<br>Limity dla otwierania/zamykania sesji wsadowych. |
| invoiceSend<br>required | object<br>Limity dla wysyłki faktur. |
| invoiceStatus<br>required | object<br>Limity dla pobierania statusu faktury z sesji. |
| sessionList<br>required | object<br>Limity dla pobierania listy sesji. |
| sessionInvoiceList<br>required | object<br>Limity dla pobierania listy faktur w sesji. |
| sessionMisc<br>required | object<br>Limity dla pozostałych operacji w ramach sesji. |
| invoiceMetadata<br>required | object<br>Limity dla pobierania metadanych faktur. |
| invoiceExport<br>required | object<br>Limity dla eksportu paczku faktur. |
| invoiceDownload<br>required | object<br>Limity dla pobierania faktur po numerze KSeF. |
| other<br>required | object<br>Limity dla pozostałych operacji API. |

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

get/api/v2/rate-limits

https://ksef-test.mf.gov.pl/api/v2/rate-limits

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"onlineSession": {"perSecond": 100,

"perMinute": 300,

"perHour": 1200

},

"batchSession": {"perSecond": 100,

"perMinute": 200,

"perHour": 1200

},

"invoiceSend": {"perSecond": 100,

"perMinute": 300,

"perHour": 1800

},

"invoiceStatus": {"perSecond": 300,

"perMinute": 1200,

"perHour": 7200

},

"sessionList": {"perSecond": 50,

"perMinute": 100,

"perHour": 600

},

"sessionInvoiceList": {"perSecond": 100,

"perMinute": 200,

"perHour": 2000

},

"sessionMisc": {"perSecond": 100,

"perMinute": 1200,

"perHour": 7200

},

"invoiceMetadata": {"perSecond": 80,

"perMinute": 160,

"perHour": 200

},

"invoiceExport": {"perSecond": 40,

"perMinute": 80,

"perHour": 200

},

"invoiceDownload": {"perSecond": 80,

"perMinute": 160,

"perHour": 640

},

"other": {"perSecond": 100,

"perMinute": 300,

"perHour": 1200

}

}`

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1limits~1context~1session/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1limits~1context~1session/post) Zmiana limitów sesji dla bieżącego kontekstu

Zmienia wartości aktualnie obowiązujących limitów sesji dla bieżącego kontekstu. **Tylko na środowiskach testowych.**

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

|     |     |
| --- | --- |
| onlineSession<br>required | object<br>Limity dla sesji interaktywnych. |
| batchSession<br>required | object<br>Limity dla sesji wsadowych. |

### Responses

**200**

OK

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/testdata/limits/context/session

https://ksef-test.mf.gov.pl/api/v2/testdata/limits/context/session

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"onlineSession": {"maxInvoiceSizeInMB": 5,

"maxInvoiceWithAttachmentSizeInMB": 10,

"maxInvoices": 100000

},

"batchSession": {"maxInvoiceSizeInMB": 5,

"maxInvoiceWithAttachmentSizeInMB": 10,

"maxInvoices": 100000

}

}`

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1limits~1context~1session/delete](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1limits~1context~1session/delete) Przywrócenie domyślnych wartości limitów sesji dla bieżącego kontekstu

Przywraca wartości aktualnie obowiązujących limitów sesji dla bieżącego kontekstu do wartości domyślnych. **Tylko na środowiskach testowych.**

##### Authorizations:

_Bearer_

### Responses

**200**

OK

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

delete/api/v2/testdata/limits/context/session

https://ksef-test.mf.gov.pl/api/v2/testdata/limits/context/session

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1limits~1subject~1certificate/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1limits~1subject~1certificate/post) Zmiana limitów certyfikatów dla bieżącego podmiotu

Zmienia wartości aktualnie obowiązujących limitów certyfikatów dla bieżącego podmiotu. **Tylko na środowiskach testowych.**

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

|     |     |
| --- | --- |
| subjectIdentifierType | string<br>Enum:"Nip""Pesel""Fingerprint""Token" |
| enrollment | object or null |
| certificate | object or null |

### Responses

**200**

OK

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/testdata/limits/subject/certificate

https://ksef-test.mf.gov.pl/api/v2/testdata/limits/subject/certificate

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subjectIdentifierType": "Nip",

"enrollment": {"maxEnrollments": 0

},

"certificate": {"maxCertificates": 0

}

}`

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1limits~1subject~1certificate/delete](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1limits~1subject~1certificate/delete) Przywrócenie domyślnych wartości limitów certyfikatów dla bieżącego podmiotu

Przywraca wartości aktualnie obowiązujących limitów certyfikatów dla bieżącego podmiotu do wartości domyślnych. **Tylko na środowiskach testowych.**

##### Authorizations:

_Bearer_

### Responses

**200**

OK

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

delete/api/v2/testdata/limits/subject/certificate

https://ksef-test.mf.gov.pl/api/v2/testdata/limits/subject/certificate

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1rate-limits/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1rate-limits/post) Zmiana limitów API dla bieżącego kontekstu

Zmienia wartości aktualnie obowiązujących limitów żądań przesyłąnych do API dla bieżącego kontekstu. **Tylko na środowiskach testowych.**

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

|     |     |
| --- | --- |
| rateLimits<br>required | object<br>Limity dla ilości żądań do API. |

### Responses

**200**

OK

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/testdata/rate-limits

https://ksef-test.mf.gov.pl/api/v2/testdata/rate-limits

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"rateLimits": {"onlineSession": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"batchSession": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"invoiceSend": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"invoiceStatus": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"sessionList": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"sessionInvoiceList": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"sessionMisc": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"invoiceMetadata": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"invoiceExport": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"invoiceDownload": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

},

"other": {"perSecond": 0,

"perMinute": 0,

"perHour": 0

}

}

}`

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1rate-limits/delete](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1rate-limits/delete) Przywrócenie domyślnych wartości limitów API dla bieżącego kontekstu

Przywraca wartości aktualnie obowiązujących limitów żądań przesyłąnych do API dla bieżącego kontekstu do wartości domyślnych. **Tylko na środowiskach testowych.**

##### Authorizations:

_Bearer_

### Responses

**200**

OK

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

delete/api/v2/testdata/rate-limits

https://ksef-test.mf.gov.pl/api/v2/testdata/rate-limits

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1rate-limits~1production/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Limity-i-ograniczenia/paths/~1api~1v2~1testdata~1rate-limits~1production/post) Zmiana limitów API dla bieżącego kontekstu na wartości produkcyjne

Zmienia wartości aktualnie obowiązujących limitów żądań przesyłanych do API dla bieżącego kontekstu na wartości takie jakie będą na środowisku produkcyjnym. **Tylko na środowiskach testowych.**

##### Authorizations:

_Bearer_

### Responses

**200**

OK

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/testdata/rate-limits/production

https://ksef-test.mf.gov.pl/api/v2/testdata/rate-limits/production

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Certyfikaty-klucza-publicznego](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty-klucza-publicznego) Certyfikaty klucza publicznego

## [tag/Certyfikaty-klucza-publicznego/paths/~1api~1v2~1security~1public-key-certificates/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty-klucza-publicznego/paths/~1api~1v2~1security~1public-key-certificates/get) Pobranie certyfikatów

Zwraca informacje o kluczach publicznych używanych do szyfrowania danych przesyłanych do systemu KSeF.

### Responses

**200**

OK

##### Response Schema: application/json

Array

| certificate<br>required | string <byte> <br>Certyfikat klucza publicznego w formacie DER zakodowany w Base64. |
| validFrom<br>required | string <date-time> <br>Data początku obowiązywania certyfikatu. |
| validTo<br>required | string <date-time> <br>Data końca obowiązywania certyfikatu. |
| usage<br>required | Array of strings (PublicKeyCertificateUsage)

Items Enum:"KsefTokenEncryption""SymmetricKeyEncryption"

Operacje do których może być używany certyfikat.

| Wartość | Opis |
| --- | --- |
| KsefTokenEncryption | Szyfrowanie tokenów KSeF przesyłanych w trakcie procesu uwierzytelniania. |
| SymmetricKeyEncryption | Szyfrowanie klucza symetrycznego wykorzystywanego do szyfrowania przesyłanych faktur. | |

**400**

Bad Request

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 60 | - | - | - |

get/api/v2/security/public-key-certificates

https://ksef-test.mf.gov.pl/api/v2/security/public-key-certificates

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`[{"certificate": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwocTwdNgt2+PXJ2fcB7k1kn5eFUTXBeep9pH...",\
\
"validFrom": "2024-07-11T12:23:56.0154302+00:00",\
\
"validTo": "2028-07-11T12:23:56.0154302+00:00",\
\
"usage": ["KsefTokenEncryption",\
\
"SymmetricKeyEncryption"\
\
]\
\
}\
\
]`

## [tag/Wysylka-interaktywna](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wysylka-interaktywna) Wysyłka interaktywna

## [tag/Wysylka-interaktywna/paths/~1api~1v2~1sessions~1online/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wysylka-interaktywna/paths/~1api~1v2~1sessions~1online/post) Otwarcie sesji interaktywnej

Otwiera sesję do wysyłki pojedynczych faktur. Należy przekazać schemat wysyłanych faktur oraz informacje o kluczu używanym do szyfrowania.

> Więcej informacji:
>
> - [Otwarcie sesji interaktywnej](https://github.com/CIRFMF/ksef-docs/blob/main/sesja-interaktywna.md#1-otwarcie-sesji)
> - [Klucz publiczny Ministersta Finansów](https://ksef-test.mf.gov.pl/docs/v2/index.html#tag/Certyfikaty-klucza-publicznego)

Aby generować dokumenty UPO w wersji v4-3 w ramach sesji, należy przy jej otwarciu przesłać nagłówek **X-KSeF-Feature: upo-v4-3**.
Od 22 grudnia 2025 wersja UPO v4-3 będzie generowana domyślnie.

**Wymagane uprawnienia**: `InvoiceWrite`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

| formCode<br>required | object

Schemat faktur wysyłanych w ramach sesji.

Obsługiwane schematy:

| SystemCode | SchemaVersion | Value |
| --- | --- | --- |
| [FA (2)](https://github.com/CIRFMF/ksef-docs/blob/main/faktury/schemy/FA/schemat_FA(2)_v1-0E.xsd) | 1-0E | FA |
| [FA (3)](https://github.com/CIRFMF/ksef-docs/blob/main/faktury/schemy/FA/schemat_FA(3)_v1-0E.xsd) | 1-0E | FA |
| [PEF (3)](https://github.com/CIRFMF/ksef-docs/blob/main/faktury/schemy/PEF/Schemat_PEF(3)_v2-1.xsd) | 2-1 | PEF |
| [PEF\_KOR (3)](https://github.com/CIRFMF/ksef-docs/blob/main/faktury/schemy/PEF/Schemat_PEF_KOR(3)_v2-1.xsd) | 2-1 | PEF | |
| encryption<br>required | object<br>Symetryczny klucz szyfrujący pliki XML, zaszyfrowany kluczem publicznym Ministerstwa Finansów. |

### Responses

**201**

Created

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny sesji. |
| validUntil<br>required | string <date-time> <br>Termin ważności sesji. Po jego upływie sesja zostanie automatycznie zamknięta. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | onlineSession |

post/api/v2/sessions/online

https://ksef-test.mf.gov.pl/api/v2/sessions/online

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"formCode": {"systemCode": "FA (3)",

"schemaVersion": "1-0E",

"value": "FA"

},

"encryption": {"encryptedSymmetricKey": "bdUVjqLj+y2q6aBUuLxxXYAMqeDuIBRTyr+hB96DaWKaGzuVHw9p+Nk9vhzgF/Q5cavK2k6eCh6SdsrWI0s9mFFj4A4UJtsyD8Dn3esLfUZ5A1juuG3q3SBi/XOC/+9W+0T/KdwdE393mbiUNyx1K/0bw31vKJL0COeJIDP7usAMDl42/H1TNvkjk+8iZ80V0qW7D+RZdz+tdiY1xV0f2mfgwJ46V0CpZ+sB9UAssRj+eVffavJ0TOg2b5JaBxE8MCAvrF6rO5K4KBjUmoy7PP7g1qIbm8xI2GO0KnfPOO5OWj8rsotRwBgu7x19Ine3qYUvuvCZlXRGGZ5NHIzWPM4O74+gNalaMgFCsmv8mMhETSU4SfAGmJr9edxPjQSbgD5i2X4eDRDMwvyaAa7CP1b2oICju+0L7Fywd2ZtUcr6El++eTVoi8HYsTArntET++gULT7XXjmb8e3O0nxrYiYsE9GMJ7HBGv3NOoJ1NTm3a7U6+c0ZJiBVLvn6xXw10LQX243xH+ehsKo6djQJKYtqcNPaXtCwM1c9RrsOx/wRXyWCtTffqLiaR0LbYvfMJAcEWceG+RaeAx4p37OiQqdJypd6LAv9/0ECWK8Bip8yyoA+0EYiAJb9YuDz2YlQX9Mx9E9FzFIAsgEQ2w723HZYWgPywLb+dlsum4lTZKQ=",

"initializationVector": "OmtDQdl6vkOI1GLKZSjgEg=="

}

}`

### Response samples

- 201
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250625-SO-2C3E6C8000-B675CF5D68-07",

"validUntil": "2025-07-11T12:23:56.0154302+00:00"

}`

## [tag/Wysylka-interaktywna/paths/~1api~1v2~1sessions~1online~1{referenceNumber}~1invoices/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wysylka-interaktywna/paths/~1api~1v2~1sessions~1online~1{referenceNumber}~1invoices/post) Wysłanie faktury

Przyjmuje zaszyfrowaną fakturę oraz jej metadane i rozpoczyna jej przetwarzanie.

> Więcej informacji:
>
> - [Wysłanie faktury](https://github.com/CIRFMF/ksef-docs/blob/main/sesja-interaktywna.md#2-wys%C5%82anie-faktury)

**Wymagane uprawnienia**: `InvoiceWrite`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji |

##### Request Body schema: application/json

Dane faktury

|     |     |
| --- | --- |
| invoiceHash<br>required | string <byte>  = 44 characters <br>Skrót SHA256 oryginalnej faktury, zakodowany w formacie Base64. |
| invoiceSize<br>required | integer <int64>  >= 1 <br>Rozmiar oryginalnej faktury w bajtach. Maksymalny rozmiar zależy od limitów ustawionych dla uwierzytelnionego kontekstu. |
| encryptedInvoiceHash<br>required | string <byte>  = 44 characters <br>Skrót SHA256 zaszyfrowanej faktury, zakodowany w formacie Base64. |
| encryptedInvoiceSize<br>required | integer <int64>  >= 1 <br>Rozmiar zaszyfrowanej faktury w bajtach. |
| encryptedInvoiceContent<br>required | string <byte> <br>Faktura zaszyfrowana algorytmem AES-256-CBC z dopełnianiem PKCS#7 (kluczem przekazanym przy otwarciu sesji), zakodowana w formacie Base64. |
| offlineMode | boolean<br>Default: false<br>Określa, czy podatnik deklaruje tryb fakturowania "offline" dla przesyłanego dokumentu. |
| hashOfCorrectedInvoice | string or null <byte>  = 44 characters <br>Skrót SHA256 korygowanej faktury, zakodowany w formacie Base64. Wymagany przy wysyłaniu korekty technicznej faktury. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny faktury. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1800 | invoiceSend |

post/api/v2/sessions/online/{referenceNumber}/invoices

https://ksef-test.mf.gov.pl/api/v2/sessions/online/{referenceNumber}/invoices

### Request samples

- Payload

Content type

application/json

Copy

`{"invoiceHash": "EbrK4cOSjW4hEpJaHU71YXSOZZmqP5++dK9nLgTzgV4=",

"invoiceSize": 6480,

"encryptedInvoiceHash": "miYb1z3Ljw5VucTZslv3Tlt+V/EK1V8Q8evD8HMQ0dc=",

"encryptedInvoiceSize": 6496,

"encryptedInvoiceContent": "...",

"offlineMode": false

}`

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250625-EE-319D7EE000-B67F415CDC-2C"

}`

## [tag/Wysylka-interaktywna/paths/~1api~1v2~1sessions~1online~1{referenceNumber}~1close/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wysylka-interaktywna/paths/~1api~1v2~1sessions~1online~1{referenceNumber}~1close/post) Zamknięcie sesji interaktywnej

Zamyka sesję interaktywną i rozpoczyna generowanie zbiorczego UPO dla sesji.

**Wymagane uprawnienia**: `InvoiceWrite`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji |

### Responses

**204**

No Content

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | onlineSession |

post/api/v2/sessions/online/{referenceNumber}/close

https://ksef-test.mf.gov.pl/api/v2/sessions/online/{referenceNumber}/close

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Wysylka-wsadowa](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wysylka-wsadowa) Wysyłka wsadowa

## [tag/Wysylka-wsadowa/paths/~1api~1v2~1sessions~1batch/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wysylka-wsadowa/paths/~1api~1v2~1sessions~1batch/post) Otwarcie sesji wsadowej

Otwiera sesję do wysyłki wsadowej faktur. Należy przekazać schemat wysyłanych faktur, informacje o paczce faktur oraz informacje o kluczu używanym do szyfrowania.

> Więcej informacji:
>
> - [Przygotwanie paczki faktur](https://github.com/CIRFMF/ksef-docs/blob/main/sesja-wsadowa.md)
> - [Klucz publiczny Ministersta Finansów](https://ksef-test.mf.gov.pl/docs/v2/index.html#tag/Certyfikaty-klucza-publicznego)

Aby generować dokumenty UPO w wersji v4-3 w ramach sesji, należy przy jej otwarciu przesłać nagłówek **X-KSeF-Feature: upo-v4-3**.
Od 22 grudnia 2025 wersja UPO v4-3 będzie generowana domyślnie.

**Wymagane uprawnienia**: `InvoiceWrite`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

| formCode<br>required | object

Schemat faktur wysyłanych w ramach sesji.

Obsługiwane schematy:

| SystemCode | SchemaVersion | Value |
| --- | --- | --- |
| [FA (2)](https://github.com/CIRFMF/ksef-docs/blob/main/faktury/schemy/FA/schemat_FA(2)_v1-0E.xsd) | 1-0E | FA |
| [FA (3)](https://github.com/CIRFMF/ksef-docs/blob/main/faktury/schemy/FA/schemat_FA(3)_v1-0E.xsd) | 1-0E | FA | |
| batchFile<br>required | object<br>Informacje o przesyłanej paczce faktur. |
| encryption<br>required | object<br>Symetryczny klucz szyfrujący plik paczki, zaszyfrowany kluczem publicznym Ministerstwa Finansów. |
| offlineMode | boolean<br>Default: false<br>Określa, czy podatnik deklaruje tryb fakurowania "offline" dla dokumentów przesyłanych w sesji wsadowej. |

### Responses

**201**

Created

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny sesji. |
| partUploadRequests<br>required | Array of objects (PartUploadRequest) <br>Dane wymagane do poprawnego przesłania poszczególnych części pliku paczki faktur.<br>Każdą część pliku paczki zadeklarowaną w **fileParts** należy przesłać zgodnie z odpowiadającym jej obiektem w **partUploadRequests**.<br>Łącznikiem pomiędzy deklaracją a instrukcją wysyłki jest pole **ordinalNumber**.<br>Dla każdej części należy:<br>- zastosować metodę HTTP wskazaną w **method**,<br>- ustawić adres z **url**,<br>- dołączyć nagłówki z **headers**,<br>- dołączyć treść części pliku w korpusie żądania.<br>`Uwaga: nie należy dodawać do nagłówków token dostępu (accessToken).`<br>Każdą część przesyła się oddzielnym żądaniem HTTP.Zwracane kody odpowiedzi:<br>- **201** – poprawne przyjęcie pliku,<br>- **400** – błędne dane,<br>- **401** – nieprawidłowe uwierzytelnienie,<br>- **403** – brak uprawnień do zapisu (np.upłynął czas na zapis). |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 200 | 1200 | batchSession |

post/api/v2/sessions/batch

https://ksef-test.mf.gov.pl/api/v2/sessions/batch

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"formCode": {"systemCode": "FA (2)",

"schemaVersion": "1-0E",

"value": "FA"

},

"batchFile": {"fileSize": 16037,

"fileHash": "WO86CC+1Lef11wEosItld/NPwxGN8tobOMLqk9PQjgs=",

"fileParts": [{"ordinalNumber": 1,\
\
"fileSize": 16048,\
\
"fileHash": "23ZyDAN0H/+yhC/En2xbNfF0tajAWSfejDaXD7fc2AE="\
\
}\
\
]

},

"encryption": {"encryptedSymmetricKey": "bYqmPAglF01AxZim4oNa+1NerhZYfFgLMnvksBprUur1aesQ0Y5jsmOIfCrozfMkF2tjdO+uOsBg4FPlDgjChwN2/tz2Hqwtxq3RkTr1SjY4x8jxJFpPedcS7EI+XO8C+i9mLj7TFx9p/bg07yM9vHtMAk5b88Ay9Qc3+T5Ch1DM2ClR3sVu2DqdlKzmbINY+rhfGtXn58Qo0XRyESGgc6M0iTZVBRPuPXLnD8a1KpOneCpNzLwxgT6Ei3ivLOpPWT53PxkRTaQ8puj6CIiCKo4FHQzHuI/NmrAhYU7TkNm2kymP/OxBgWdg3XB74tqNFfT8RZN1bZXuPhBidDOqa+xsqY3E871FSDmQwZf58HmoNl31XNvpnryiRGfnAISt+m+ELqgksAresVu6E9poUL1yiff+IOHSZABoYpNiqwnbT8qyW1uk8lKLyFVFu+kOsbzBk1OWWHqSkNFDaznDa2MKjHonOXI0uyKaKWvoBFC4dWN1PVumfpSSFAeYgNpAyVrZdcVOuiliEWepTDjGzJoOafTvwr5za2S6B5bPECDpX7JXazV7Olkq7ezG0w8y3olx+0C+NHoCk8B5/cm4gtVHTgKjiLSGpKJVOJABLXFkOyIOjbQsVe4ryX0Qy+SfL7JIQvTWvM5xkCoOMbzLdMo9tNo5qE34sguFI+lIevY=",

"initializationVector": "jWpJLNBHJ5pQEGCBglmIAw=="

},

"offlineMode": false

}`

### Response samples

- 201
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"referenceNumber": "20250626-SB-213D593000-4DE10D80A5-E9",

"partUploadRequests": [{"ordinalNumber": 1,\
\
"method": "PUT",\
\
"url": "https://ksef-api-storage/storage/00/20250626-sb-213d593000-4de10d80a5-e9/batch-parts/1?skoid=1ad7cfe8-2cb2-406b-b96c-6eefb55794db&sktid=647754c7-3974-4442-a425-c61341b61c69&skt=2025-06-26T09%3A40%3A54Z&ske=2025-06-26T10%3A10%3A54Z&sks=b&skv=2025-01-05&sv=2025-01-05&se=2025-06-26T10%3A10%3A54Z&sr=b&sp=w&sig=8mKZEU8Reuz%2Fn7wHi4T%2FY8BzLeD5l8bR2xJsBxIgDEY%3D",\
\
"headers": {"x-ms-blob-type": "BlockBlob"\
\
}\
\
}\
\
]

}`

## [tag/Wysylka-wsadowa/paths/~1api~1v2~1sessions~1batch~1{referenceNumber}~1close/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wysylka-wsadowa/paths/~1api~1v2~1sessions~1batch~1{referenceNumber}~1close/post) Zamknięcie sesji wsadowej

Zamyka sesję wsadową, rozpoczyna procesowanie paczki faktur i generowanie UPO dla prawidłowych faktur oraz zbiorczego UPO dla sesji.

**Wymagane uprawnienia**: `InvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji |

### Responses

**204**

No Content

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 200 | 1200 | batchSession |

post/api/v2/sessions/batch/{referenceNumber}/close

https://ksef-test.mf.gov.pl/api/v2/sessions/batch/{referenceNumber}/close

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Status-wysylki-i-UPO](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Status-wysylki-i-UPO) Status wysyłki i UPO

## [tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions/get) Pobranie listy sesji

Zwraca listę sesji spełniających podane kryteria wyszukiwania.

**Sortowanie:**

- dateCreated (Desc)

**Wymagane uprawnienia**:

- `Introspection` – pozwala pobrać wszystkie sesje w bieżącym kontekście uwierzytelnienia `(ContextIdentifier)`.
- `InvoiceWrite` – pozwala pobrać wyłącznie sesje utworzone przez podmiot uwierzytelniający, czyli podmiot inicjujący uwierzytelnienie.

##### Authorizations:

_Bearer_

##### query Parameters

| pageSize | integer <int32>  \[ 10 .. 500 \] <br>Default: 10<br>Rozmiar strony. |
| sessionType<br>required | string

Enum:"Online""Batch"

Typ sesji.

| Wartość | Opis |
| --- | --- |
| Online | Wysyłka interaktywna (pojedyncze faktury). |
| Batch | Wysyłka wsadowa (paczka faktur). | |
| referenceNumber | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji. |
| dateCreatedFrom | string <date-time> <br>Data utworzenia sesji (od). |
| dateCreatedTo | string <date-time> <br>Data utworzenia sesji (do). |
| dateClosedFrom | string <date-time> <br>Data zamknięcia sesji (od). |
| dateClosedTo | string <date-time> <br>Data zamknięcia sesji (do). |
| dateModifiedFrom | string <date-time> <br>Data ostatniej aktywności (wysyłka faktury lub zmiana statusu) w ramach sesji (od). |
| dateModifiedTo | string <date-time> <br>Data ostatniej aktywności (wysyłka faktury lub zmiana statusu) w ramach sesji (do). |
| statuses | Array of strings (CommonSessionStatus)

Items Enum:"InProgress""Succeeded""Failed""Cancelled"

Statusy sesji.

| Wartość | Opis |
| --- | --- |
| InProgress | Sesja aktywna. |
| Succeeded | Sesja przetworzona poprawnie. W trakcie przetwarzania sesji nie wystąpiły żadne błędy, ale część faktur nadal mogła zostać odrzucona. |
| Failed | Sesja nie przetworzona z powodu błędów. Na etapie rozpoczynania lub kończenia sesji wystąpiły błędy, które nie pozwoliły na jej poprawne przetworzenie. |
| Cancelled | Sesja anulowania. Został przekroczony czas na wysyłkę w sesji wsadowej, lub nie przesłano żadnych faktur w sesji interaktywnej. | |

##### header Parameters

|     |     |
| --- | --- |
| x-continuation-token | string<br>Token służący do pobrania kolejnej strony wyników. |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| continuationToken | string or null<br>Token służący do pobrania kolejnej strony wyników. Jeśli jest pusty, to nie ma kolejnych stron. |
| sessions<br>required | Array of objects (SessionsQueryResponseItem) <br>Lista sesji. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 50 | 100 | 600 | sessionList |

get/api/v2/sessions

https://ksef-test.mf.gov.pl/api/v2/sessions

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"continuationToken": "W3sidG9rZW4iOiIrUklEOn4zeHd0QU1SM3dYYjRCd0FBQUFBQUNBPT0jUlQ6MSNUUkM6MTAjSVNWOjIjSUVPOjY1NTY3I1FDRjo4I0ZQQzpBZ2dBQUFBQUFDQUFBQVlBQUFBQUlBQUFBQUFBQUFBZ0FBQVVBUEVIQUVGdGdJUUFFUUJBQUJBRUFCQVVoZ1NBQXdBQUFBQWdBQUFHQUhFa0NFQWxnQVFBQUFBQUlBQUFGZ0F5Q0FVZ0VBRC9nRE9BRFlFdWdIcUF5SXBEZ0IrQUJnQUFBQUFnQUFBQ0FPNlYiLCJyYW5nZSI6eyJtaW4iOiIiLCJtYXgiOiIwNUMxREYyQjVGMzU5OCJ9fV0=",

"sessions": [{"referenceNumber": "20250925-SO-2F67776000-97273B191A-65",\
\
"status": {"code": 200,\
\
"description": "Sesja interaktywna przetworzona pomyślnie"\
\
},\
\
"dateCreated": "2025-09-25T13:48:26.8700925+00:00",\
\
"dateUpdated": "2025-09-26T02:16:07+00:00",\
\
"validUntil": "2025-09-26T01:48:26.8700925+00:00",\
\
"totalInvoiceCount": 2,\
\
"successfulInvoiceCount": 2,\
\
"failedInvoiceCount": 0\
\
},\
\
{"referenceNumber": "20250928-SO-494B541000-3AD87C01BA-5D",\
\
"status": {"code": 200,\
\
"description": "Sesja interaktywna przetworzona pomyślnie"\
\
},\
\
"dateCreated": "2025-09-28T21:20:54.5936927+00:00",\
\
"dateUpdated": "2025-09-29T10:19:28+00:00",\
\
"validUntil": "2025-09-29T09:20:54.5936927+00:00",\
\
"totalInvoiceCount": 3,\
\
"successfulInvoiceCount": 3,\
\
"failedInvoiceCount": 0\
\
}\
\
]

}`

## [tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}/get) Pobranie statusu sesji

Sprawdza bieżący status sesji o podanym numerze referencyjnym.

**Wymagane uprawnienia**: `InvoiceWrite`, `Introspection`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji. |

### Responses

**200**

OK

##### Response Schema: application/json

| status<br>required | object

Informacje o aktualnym statusie.

Sesja wsadowa:

| Code | Description | Details |
| --- | --- | --- |
| 100 | Sesja wsadowa rozpoczęta | - |
| 150 | Trwa przetwarzanie | - |
| 200 | Sesja wsadowa przetworzona pomyślnie | - |
| 405 | Błąd weryfikacji poprawności dostarczonych elementów paczki | - |
| 415 | Błąd odszyfrowania dostarczonego klucza | - |
| 420 | Przekroczony limit faktur w sesji | - |
| 430 | Błąd dekompresji pierwotnego archiwum | - |
| 435 | Błąd odszyfrowania zaszyfrowanych części archiwum | - |
| 440 | Sesja anulowana | Przekroczono czas wysyłki |
| 440 | Sesja anulowana | Nie przesłano faktur |
| 445 | Błąd weryfikacji, brak poprawnych faktur | - |
| 500 | Nieznany błąd ({statusCode}) | - |

Sesja interaktywna:

| Code | Description | Details |
| --- | --- | --- |
| 100 | Sesja interaktywna otwarta | - |
| 170 | Sesja interaktywna zamknięta | - |
| 200 | Sesja interaktywna przetworzona pomyślnie | - |
| 415 | Błąd odszyfrowania dostarczonego klucza | - |
| 440 | Sesja anulowana | Nie przesłano faktur |
| 445 | Błąd weryfikacji, brak poprawnych faktur | - |
| \* | description missing | - | |
| validUntil | string or null <date-time> <br>Termin ważności sesji. Po jego upływie sesja zostanie automatycznie zamknięta. |
| upo | object or null<br>Informacja o UPO sesyjnym, zwracana gdy sesja została zamknięta i UPO zostało wygenerowane. |
| invoiceCount | integer or null <int32>  >= 0 <br>Liczba przyjętych faktur w ramach sesji. |
| successfulInvoiceCount | integer or null <int32>  >= 0 <br>Liczba faktur przeprocesowanych w ramach sesji z sukcesem . |
| failedInvoiceCount | integer or null <int32>  >= 0 <br>Liczba faktur przeprocesowanych w ramach sesji z błędem. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 1200 | 7200 | sessionMisc |

get/api/v2/sessions/{referenceNumber}

https://ksef-test.mf.gov.pl/api/v2/sessions/{referenceNumber}

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"status": {"code": 200,

"description": "Sesja interaktywna przetworzona pomyślnie"

},

"upo": {"pages": [{"referenceNumber": "20250918-EU-2EBD6FA000-242EB9B66D-43",\
\
"downloadUrl": "https://ksef-test.mf.gov.pl/storage/01/20250918-sb-3789a40000-20373e1269-a3/session-upo/upo_00.xml?sv=2025-01-05&st=2025-09-18T14%3A55%3A50Z&se=2025-09-21T15%3A00%3A50Z&sr=b&sp=r&sig=ZlQO6Xtzu3VQQDwmEMfb0VryMxe9WcUgWtkdiB6X2Qo%3D",\
\
"downloadUrlExpirationDate": "2025-09-21T15:00:50+00:00"\
\
}\
\
]

},

"invoiceCount": 10,

"successfulInvoiceCount": 8,

"failedInvoiceCount": 2

}`

## [tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices/get) Pobranie faktur sesji

Zwraca listę faktur przesłanych w sesji wraz z ich statusami, oraz informacje na temat ilości poprawnie i niepoprawnie przetworzonych faktur.

**Wymagane uprawnienia**: `InvoiceWrite`, `Introspection`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji. |

##### query Parameters

|     |     |
| --- | --- |
| pageSize | integer <int32>  \[ 10 .. 500 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### header Parameters

|     |     |
| --- | --- |
| x-continuation-token | string<br>Token służący do pobrania kolejnej strony wyników. |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| continuationToken | string or null<br>Token służący do pobrania kolejnej strony wyników. Jeśli jest pusty, to nie ma kolejnych stron. |
| invoices<br>required | Array of objects (SessionInvoiceStatusResponse) <br>Lista pobranych faktur. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 200 | 2000 | sessionInvoiceList |

get/api/v2/sessions/{referenceNumber}/invoices

https://ksef-test.mf.gov.pl/api/v2/sessions/{referenceNumber}/invoices

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"continuationToken": "W34idG9rZW4iOiIrUklEOn4xUE5BQU5hcXJVOUFBQUFBQUFBQUFBPT0jUlQ6MSNUUkM6MTAjSVNWOjIjSUVPOjY1NTY3I1FDRjo4I0ZQQzpBVUFBQUFBQUFBQUFRZ0FBQUFBQUFBQT0iLCJyYW5nZSI6eyJtaW4iOiIiLCJtYXgiOiJGRiJ9fV0=",

"invoices": [{"ordinalNumber": 1,\
\
"invoiceNumber": "FA/XPWIC-7900685789/06/2025",\
\
"ksefNumber": "5265877635-20250626-010080DD2B5E-26",\
\
"referenceNumber": "20250918-EE-2F15D39000-242207E5C4-1B",\
\
"invoiceHash": "mkht+3m5trnfxlTYhq3QFn74LkEO69MFNlsMAkCDSPA=",\
\
"acquisitionDate": "2025-09-18T12:24:16.0154302+00:00",\
\
"invoicingDate": "2025-09-18T12:23:56.0154302+00:00",\
\
"permanentStorageDate": "2025-09-18T12:24:01.0154302+00:00",\
\
"upoDownloadUrl": "https://ksef-test.mf.gov.pl/storage/01/20250918-SB-3789A40000-20373E1269-A3/invoice-upo/upo_5265877635-20250626-010080DD2B5E-26.xml?sv=2025-01-05&st=2025-09-18T14%3A49%3A20Z&se=2025-09-21T14%3A54%3A20Z&sr=b&sp=r&sig=%2BUWFPA10gS580VhngGKW%2FZiOOtiHPOiTyMlxhG6ZvWs%3D",\
\
"upoDownloadUrlExpirationDate": "2025-09-21T14:54:20+00:00",\
\
"status": {"code": 200,\
\
"description": "Sukces"\
\
}\
\
},\
\
{"ordinalNumber": 2,\
\
"referenceNumber": "20250918-EE-2F20AD2000-242386DF86-52",\
\
"invoiceHash": "mkht+3m5trnfxlTYhq3QFn74LkEO69MFNlsMAkCDSPA=",\
\
"invoicingDate": "2025-09-18T12:23:56.0154302+00:00",\
\
"status": {"code": 440,\
\
"description": "Duplikat faktury",\
\
"details": ["Duplikat faktury. Faktura o numerze KSeF: 5265877635-20250626-010080DD2B5E-26 została już prawidłowo przesłana do systemu w sesji: 20250626-SO-2F14610000-242991F8C9-B4"\
\
],\
\
"extensions": {"originalSessionReferenceNumber": "20250626-SO-2F14610000-242991F8C9-B4",\
\
"originalKsefNumber": "5265877635-20250626-010080DD2B5E-26"\
\
}\
\
}\
\
}\
\
]

}`

## [tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices~1{invoiceReferenceNumber}/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices~1{invoiceReferenceNumber}/get) Pobranie statusu faktury z sesji

Zwraca fakturę przesłaną w sesji wraz ze statusem.

**Wymagane uprawnienia**: `InvoiceWrite`, `Introspection`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji. |
| invoiceReferenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny faktury. |

### Responses

**200**

OK

##### Response Schema: application/json

| ordinalNumber<br>required | integer <int32>  >= 1 <br>Numer sekwencyjny faktury w ramach sesji. |
| invoiceNumber | string or null <= 256 characters <br>Numer faktury. |
| ksefNumber | string or null \[ 35 .. 36 \] characters ^(\[1-9\](\\d\[1-9\]\|\[1-9\]\\d)\\d{7})-(20\[2-9\]\[0-9\]\|...Show pattern<br>Numer KSeF. |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny faktury. |
| invoiceHash<br>required | string <byte>  = 44 characters <br>Skrót SHA256 faktury, zakodowany w formacie Base64. |
| invoiceFileName | string or null <= 128 characters <br>Nazwa pliku faktury (zwracana dla faktur wysyłanych wsadowo). |
| acquisitionDate | string or null <date-time> <br>Data nadania numeru KSeF. |
| invoicingDate<br>required | string <date-time> <br>Data przyjęcia faktury w systemie KSeF (do dalszego przetwarzania). |
| permanentStorageDate | string or null <date-time> <br>Data trwałego zapisu faktury w repozytorium KSeF. Wartość uzupełniana asynchronicznie w momencie trwałego zapisu; zawsze późniejsza niż **acquisitionDate**. Podczas sprawdzania statusu może być jeszcze niedostępna. |
| upoDownloadUrl | string or null <uri> <br>Adres do pobrania UPO. Link generowany jest przy każdym odpytaniu o status. <br>Dostęp odbywa się metodą `HTTP GET` i **nie należy** wysyłać tokenu dostępowego. <br>Link nie podlega limitom API i wygasa po określonym czasie w `UpoDownloadUrlExpirationDate`. |
| upoDownloadUrlExpirationDate | string or null <date-time> <br>Data i godzina wygaśnięcia adresu. Po tej dacie link `UpoDownloadUrl` nie będzie już aktywny. |
| invoicingMode | string or null<br>Enum:"Online""Offline"<br>Tryb fakturowania (online/offline). |
| status<br>required | object

Status faktury.

| Code | Description | Details | Extensions |
| --- | --- | --- | --- |
| 100 | Faktura przyjęta do dalszego przetwarzania | - | - |
| 150 | Trwa przetwarzanie | - | - |
| 200 | Sukces | - | - |
| 405 | Przetwarzanie anulowane z powodu błędu sesji | - | - |
| 410 | Nieprawidłowy zakres uprawnień | - | - |
| 415 | Brak możliwości wysyłania faktury z załącznikiem | - | - |
| 430 | Błąd weryfikacji pliku faktury | - | - |
| 435 | Błąd odszyfrowania pliku | - | - |
| 440 | Duplikat faktury | - | 'originalSessionReferenceNumber', 'originalKsefNumber' |
| 450 | Błąd weryfikacji semantyki dokumentu faktury | - | - |
| 500 | Nieznany błąd ({statusCode}) | - | - |
| 550 | Operacja została anulowana przez system | Przetwarzanie zostało przerwane z przyczyn wewnętrznych systemu. Spróbuj ponownie | - | |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 300 | 1200 | 7200 | invoiceStatus |

get/api/v2/sessions/{referenceNumber}/invoices/{invoiceReferenceNumber}

https://ksef-test.mf.gov.pl/api/v2/sessions/{referenceNumber}/invoices/{invoiceReferenceNumber}

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"ordinalNumber": 2,

"referenceNumber": "20250626-EE-2F20AD2000-242386DF86-52",

"invoicingDate": "2025-07-11T12:23:56.0154302+00:00",

"status": {"code": 440,

"description": "Duplikat faktury",

"details": ["Duplikat faktury. Faktura o numerze KSeF: 5265877635-20250626-010080DD2B5E-26 została już prawidłowo przesłana do systemu w sesji: 20250626-SO-2F14610000-242991F8C9-B4"\
\
],

"extensions": {"originalSessionReferenceNumber": "20250626-SO-2F14610000-242991F8C9-B4",

"originalKsefNumber": "5265877635-20250626-010080DD2B5E-26"

}

}

}`

## [tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices~1failed/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices~1failed/get) Pobranie niepoprawnie przetworzonych faktur sesji

Zwraca listę niepoprawnie przetworzonych faktur przesłanych w sesji wraz z ich statusami.

**Wymagane uprawnienia**: `InvoiceWrite`, `Introspection`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji. |

##### query Parameters

|     |     |
| --- | --- |
| pageSize | integer <int32>  \[ 10 .. 500 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### header Parameters

|     |     |
| --- | --- |
| x-continuation-token | string<br>Token służący do pobrania kolejnej strony wyników. |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| continuationToken | string or null<br>Token służący do pobrania kolejnej strony wyników. Jeśli jest pusty, to nie ma kolejnych stron. |
| invoices<br>required | Array of objects (SessionInvoiceStatusResponse) <br>Lista pobranych faktur. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 200 | 2000 | sessionInvoiceList |

get/api/v2/sessions/{referenceNumber}/invoices/failed

https://ksef-test.mf.gov.pl/api/v2/sessions/{referenceNumber}/invoices/failed

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"continuationToken": "...",

"invoices": [{"ordinalNumber": 2,\
\
"referenceNumber": "20250626-EE-2F20AD2000-242386DF86-52",\
\
"invoiceHash": "mkht+3m5trnfxlTYhq3QFn74LkEO69MFNlsMAkCDSPA=",\
\
"invoiceFileName": "invoice1.xml",\
\
"invoicingDate": "2025-07-11T12:23:56.0154302+00:00",\
\
"status": {"code": 440,\
\
"description": "Duplikat faktury",\
\
"details": ["Duplikat faktury. Faktura o numerze KSeF: 5265877635-20250626-010080DD2B5E-26 została już prawidłowo przesłana do systemu w sesji: 20250626-SO-2F14610000-242991F8C9-B4"\
\
],\
\
"extensions": {"originalSessionReferenceNumber": "20250626-SO-2F14610000-242991F8C9-B4",\
\
"originalKsefNumber": "5265877635-20250626-010080DD2B5E-26"\
\
}\
\
}\
\
}\
\
]

}`

## [tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices~1ksef~1{ksefNumber}~1upo/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices~1ksef~1{ksefNumber}~1upo/get) Pobranie UPO faktury z sesji na podstawie numeru KSeF

Zwraca UPO faktury przesłanego w sesji na podstawie jego numeru KSeF.

**Wymagane uprawnienia**: `InvoiceWrite`, `Introspection`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji. |
| ksefNumber<br>required | string (KsefNumber)  \[ 35 .. 36 \] characters ^(\[1-9\](\\d\[1-9\]\|\[1-9\]\\d)\\d{7})-(20\[2-9\]\[0-9\]\|...Show pattern<br>Numer KSeF faktury. |

### Responses

**200**

OK

##### Response Schema: application/xml

string

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 1200 | 7200 | sessionMisc |

get/api/v2/sessions/{referenceNumber}/invoices/ksef/{ksefNumber}/upo

https://ksef-test.mf.gov.pl/api/v2/sessions/{referenceNumber}/invoices/ksef/{ksefNumber}/upo

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices~1{invoiceReferenceNumber}~1upo/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1invoices~1{invoiceReferenceNumber}~1upo/get) Pobranie UPO faktury z sesji na podstawie numeru referencyjnego faktury

Zwraca UPO faktury przesłanego w sesji na podstawie jego numeru KSeF.

**Wymagane uprawnienia**: `InvoiceWrite`, `Introspection`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji. |
| invoiceReferenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny faktury. |

### Responses

**200**

OK

##### Response Schema: application/xml

string

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 1200 | 7200 | sessionMisc |

get/api/v2/sessions/{referenceNumber}/invoices/{invoiceReferenceNumber}/upo

https://ksef-test.mf.gov.pl/api/v2/sessions/{referenceNumber}/invoices/{invoiceReferenceNumber}/upo

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1upo~1{upoReferenceNumber}/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Status-wysylki-i-UPO/paths/~1api~1v2~1sessions~1{referenceNumber}~1upo~1{upoReferenceNumber}/get) Pobranie UPO dla sesji

Zwraca XML zawierający zbiorcze UPO dla sesji.

**Wymagane uprawnienia**: `InvoiceWrite`, `Introspection`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny sesji. |
| upoReferenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny UPO. |

### Responses

**200**

OK

##### Response Schema: application/xml

string

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 1200 | 7200 | sessionMisc |

get/api/v2/sessions/{referenceNumber}/upo/{upoReferenceNumber}

https://ksef-test.mf.gov.pl/api/v2/sessions/{referenceNumber}/upo/{upoReferenceNumber}

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Pobieranie-faktur](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Pobieranie-faktur) Pobieranie faktur

## [tag/Pobieranie-faktur/paths/~1api~1v2~1invoices~1ksef~1{ksefNumber}/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Pobieranie-faktur/paths/~1api~1v2~1invoices~1ksef~1{ksefNumber}/get) Pobranie faktury po numerze KSeF

Zwraca fakturę o podanym numerze KSeF.

**Wymagane uprawnienia**: `InvoiceRead`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| ksefNumber<br>required | string (KsefNumber)  \[ 35 .. 36 \] characters ^(\[1-9\](\\d\[1-9\]\|\[1-9\]\\d)\\d{7})-(20\[2-9\]\[0-9\]\|...Show pattern<br>Numer KSeF faktury. |

### Responses

**200**

OK

##### Response Schema: application/xml

string

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 80 | 160 | 640 | invoiceDownload |

get/api/v2/invoices/ksef/{ksefNumber}

https://ksef-test.mf.gov.pl/api/v2/invoices/ksef/{ksefNumber}

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],

"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",

"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",

"serviceCtx": "srvABCDA",

"serviceName": "Undefined",

"timestamp": "2025-10-11T12:23:56.0154302"

}

}`

## [tag/Pobieranie-faktur/paths/~1api~1v2~1invoices~1query~1metadata/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Pobieranie-faktur/paths/~1api~1v2~1invoices~1query~1metadata/post) Pobranie listy metadanych faktur

Zwraca metadane faktur spełniających filtry.

Limit techniczny: ≤ 10 000 rekordów na zestaw filtrów, po jego osiągnięciu **isTruncated = true** i należy ponownie ustawić **dateRange**, używając ostatniej daty z wyników (tj. ustawić from/to - w zależności od kierunku sortowania, od daty ostatniego zwróconego rekordu) oraz wyzerować **pageOffset**.

`Do scenariusza przyrostowego należy używać daty PermanentStorage oraz kolejność sortowania Asc`.

**Scenariusz pobierania przyrostowego (skrót):**

- Gdy **hasMore = false**, należy zakończyć,
- Gdy **hasMore = true** i **isTruncated = false**, należy zwiększyć **pageOffset**,
- Gdy **hasMore = true** i **isTruncated = true**, należy zawęzić **dateRange** (ustawić from od daty ostatniego rekordu), wyzerować **pageOffset** i kontynuować

**Sortowanie:**

- permanentStorageDate \| invoicingDate \| issueDate (Asc \| Desc) - pole wybierane na podstawie filtrów

**Wymagane uprawnienia**: `InvoiceRead`.

##### Authorizations:

_Bearer_

##### query Parameters

| sortOrder | string

Default: "Asc"

Enum:"Asc""Desc"

Kolejność sortowania wyników.

| Wartość | Opis |
| --- | --- |
| Asc | Sortowanie rosnąco. |
| Desc | Sortowanie malejąco. | |
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Indeks pierwszej strony wyników (0 = pierwsza strona). |
| pageSize | integer <int32>  \[ 10 .. 250 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### Request Body schema: application/json

Kryteria filtrowania.

| subjectType<br>required | string

Enum:"Subject1""Subject2""Subject3""SubjectAuthorized"

Typ podmiotu, którego dotyczą kryteria filtrowania metadanych faktur.
Określa kontekst, w jakim przeszukiwane są dane.

| Wartość | Opis |
| --- | --- |
| Subject1 | Podmiot 1 - sprzedawca |
| Subject2 | Podmiot 2 - nabywca |
| Subject3 | Podmiot 3 |
| SubjectAuthorized | Podmiot upoważniony | |
| dateRange<br>required | object<br>Typ i zakres dat, według którego mają być filtrowane faktury. Dozwolony maksymalny okres wynosi 2 lata. |
| ksefNumber | string or null \[ 35 .. 36 \] characters ^(\[1-9\](\\d\[1-9\]\|\[1-9\]\\d)\\d{7})-(20\[2-9\]\[0-9\]\|...Show pattern<br>Numer KSeF faktury (exact match). |
| invoiceNumber | string or null <= 256 characters <br>Numer faktury nadany przez wystawcę (exact match). |
| amount | object or null<br>Filtr kwotowy – brutto, netto lub VAT (z wartością). |
| sellerNip | string or null = 10 characters ^\[1-9\]((\\d\[1-9\])\|(\[1-9\]\\d))\\d{7}$<br>Nip sprzedawcy (exact match). |
| buyerIdentifier | object or null

Identyfikator nabywcy.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| VatUe | Identyfikator VAT UE podmiotu unijnego. |
| Other | Inny identyfikator |
| None | Brak identyfikatora nabywcy | |
| currencyCodes | Array of strings or null (CurrencyCode) <br>Enum:"AED""AFN""ALL""AMD""ANG""AOA""ARS""AUD""AWG""AZN""BAM""BBD""BDT""BGN""BHD""BIF""BMD""BND""BOB""BOV""BRL""BSD""BTN""BWP""BYN""BZD""CAD""CDF""CHE""CHF""CHW""CLF""CLP""CNY""COP""COU""CRC""CUC""CUP""CVE""CZK""DJF""DKK""DOP""DZD""EGP""ERN""ETB""EUR""FJD""FKP""GBP""GEL""GGP""GHS""GIP""GMD""GNF""GTQ""GYD""HKD""HNL""HRK""HTG""HUF""IDR""ILS""IMP""INR""IQD""IRR""ISK""JEP""JMD""JOD""JPY""KES""KGS""KHR""KMF""KPW""KRW""KWD""KYD""KZT""LAK""LBP""LKR""LRD""LSL""LYD""MAD""MDL""MGA""MKD""MMK""MNT""MOP""MRU""MUR""MVR""MWK""MXN""MXV""MYR""MZN""NAD""NGN""NIO""NOK""NPR""NZD""OMR""PAB""PEN""PGK""PHP""PKR""PLN""PYG""QAR""RON""RSD""RUB""RWF""SAR""SBD""SCR""SDG""SEK""SGD""SHP""SLL""SOS""SRD""SSP""STN""SVC""SYP""SZL""THB""TJS""TMT""TND""TOP""TRY""TTD""TWD""TZS""UAH""UGX""USD""USN""UYI""UYU""UYW""UZS""VES""VND""VUV""WST""XAF""XAG""XAU""XBA""XBB""XBC""XBD""XCD""XCG""XDR""XOF""XPD""XPF""XPT""XSU""XUA""XXX""YER""ZAR""ZMW""ZWL"<br>Kody walut. |
| invoicingMode | string or null<br>Enum:"Online""Offline"<br>Tryb wystawienia faktury: online lub offline. |
| isSelfInvoicing | boolean or null<br>Czy faktura została wystawiona w trybie samofakturowania. |
| formType | string or null

Enum:"FA""PEF""RR"

Typ dokumentu.

| Wartość | Opis |
| --- | --- |
| FA | Faktura VAT |
| PEF | Faktura PEF |
| RR | Faktura RR | |
| invoiceTypes | Array of strings or null (InvoiceType)

Enum:"Vat""Zal""Kor""Roz""Upr""KorZal""KorRoz""VatPef""VatPefSp""KorPef""VatRr""KorVatRr"

Rodzaje faktur.

| Wartość | Opis |
| --- | --- |
| Vat | (FA) Podstawowa |
| Zal | (FA) Zaliczkowa |
| Kor | (FA) Korygująca |
| Roz | (FA) Rozliczeniowa |
| Upr | (FA) Uproszczona |
| KorZal | (FA) Korygująca fakturę zaliczkową |
| KorRoz | (FA) Korygująca fakturę rozliczeniową |
| VatPef | (PEF) Podstawowowa |
| VatPefSp | (PEF) Specjalizowana |
| KorPef | (PEF) Korygująca |
| VatRr | (RR) Podstawowa |
| KorVatRr | (RR) Korygująca | |
| hasAttachment | boolean or null<br>Czy faktura ma załącznik. |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| hasMore<br>required | boolean<br>Określa, czy istnieją kolejne wyniki zapytania. |
| isTruncated<br>required | boolean<br>Określa, czy osiągnięto maksymalny dopuszczalny zakres wyników zapytania (10 000). |
| permanentStorageHwmDate | string or null <date-time> <br>Dotyczy wyłącznie zapytań filtrowanych po typie daty **PermanentStorage**.<br>Jeśli zapytanie dotyczyło najnowszego okresu, wartość ta może być wartością nieznacznie skorygowaną względem górnej granicy podanej w warunkach zapytania.<br>Dla okresów starszych, będzie to zgodne z warunkami zapytania. <br>Wartość jest stała dla wszystkich stron tego samego zapytania<br>i nie zależy od paginacji ani sortowania.<br>System gwarantuje, że dane poniżej tej wartości są spójne i kompletne.<br>Ponowne zapytania obejmujące zakresem dane poniżej tego kroczącego znacznika czasu nie zwrócą w przyszłości innych wyników (np.dodatkowych faktur). <br>Dla dateType = Issue lub Invoicing – null. |
| invoices<br>required | Array of objects (InvoiceMetadata) <br>Lista faktur spełniających kryteria. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 80 | 160 | 200 | invoiceMetadata |

post/api/v2/invoices/query/metadata

https://ksef-test.mf.gov.pl/api/v2/invoices/query/metadata

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subjectType": "Subject1",

"dateRange": {"dateType": "PermanentStorage",

"from": "2025-08-28T09:22:13.388+00:00",

"to": "2025-09-28T09:24:13.388+00:00"

},

"amount": {"type": "Brutto",

"from": 100.5,

"to": 250

},

"currencyCodes": ["PLN",\
\
"EUR"\
\
],

"invoicingMode": "Online",

"formType": "FA",

"invoiceTypes": ["Vat"\
\
],

"hasAttachment": true

}`

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": false,

"isTruncated": false,

"permanentStorageHwmDate": "2025-08-28T09:23:55.388+00:00",

"invoices": [{"ksefNumber": "5555555555-20250828-010080615740-E4",\
\
"invoiceNumber": "FA/KUDYO1a7dddfe-610e-4843-84ba-6b887e35266e",\
\
"issueDate": "2025-08-27",\
\
"invoicingDate": "2025-08-28T09:22:13.388+00:00",\
\
"acquisitionDate": "2025-08-28T09:22:56.388+00:00",\
\
"permanentStorageDate": "2025-08-28T09:23:01.388+00:00",\
\
"seller": {"nip": "5555555555",\
\
"name": "Test Company 1"\
\
},\
\
"buyer": {"identifier": {"type": "Nip",\
\
"value": "7352765225"\
\
},\
\
"name": "Test Company 4"\
\
},\
\
"netAmount": 35260.63,\
\
"grossAmount": 43370.57,\
\
"vatAmount": 8109.94,\
\
"currency": "PLN",\
\
"invoicingMode": "Offline",\
\
"invoiceType": "Vat",\
\
"formCode": {"systemCode": "FA (3)",\
\
"schemaVersion": "1-0E",\
\
"value": "FA"\
\
},\
\
"isSelfInvoicing": false,\
\
"hasAttachment": false,\
\
"invoiceHash": "mkht+3m5trnfxlTYhq3QFn74LkEO69MFNlsMAkCDSPA=",\
\
"thirdSubjects": [ ]\
\
},\
\
{"ksefNumber": "5555555555-20250828-010080615740-E4",\
\
"invoiceNumber": "5265877635-20250925-010020A0A242-0A",\
\
"issueDate": "2025-08-28",\
\
"invoicingDate": "2025-08-28T10:23:13.388+00:00",\
\
"acquisitionDate": "2025-08-28T10:23:56.388+00:00",\
\
"permanentStorageDate": "2025-08-28T10:24:01.388+00:00",\
\
"seller": {"nip": "5555555555",\
\
"name": "Test Company 1"\
\
},\
\
"buyer": {"identifier": {"type": "Nip",\
\
"value": "3225081610"\
\
},\
\
"name": "Test Company 2"\
\
},\
\
"netAmount": 35260.63,\
\
"grossAmount": 43370.57,\
\
"vatAmount": 8109.94,\
\
"currency": "PLN",\
\
"invoicingMode": "Online",\
\
"invoiceType": "Vat",\
\
"formCode": {"systemCode": "FA (3)",\
\
"schemaVersion": "1-0E",\
\
"value": "FA"\
\
},\
\
"isSelfInvoicing": false,\
\
"hasAttachment": true,\
\
"invoiceHash": "o+nMBU8n8TAhy6EjbcdYdHSZVbUspqmCKqOPLhy3zIQ=",\
\
"thirdSubjects": [{"identifier": {"type": "InternalId",\
\
"value": "5555555555-12345"\
\
},\
\
"name": "Wystawca faktury",\
\
"role": 4\
\
}\
\
]\
\
}\
\
]

}`

## [tag/Pobieranie-faktur/paths/~1api~1v2~1invoices~1exports/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Pobieranie-faktur/paths/~1api~1v2~1invoices~1exports/post) Eksport paczki faktur

Rozpoczyna asynchroniczny proces wyszukiwania faktur w systemie KSeF na podstawie przekazanych filtrów oraz przygotowania ich w formie zaszyfrowanej paczki.
Wymagane jest przekazanie informacji o szyfrowaniu w polu **Encryption**, które służą do zabezpieczenia przygotowanej paczki z fakturami.
Maksymalnie można uruchomić 10 równoczesnych eksportów w zalogowanym kontekście.

System pobiera faktury rosnąco według daty określonej w filtrze (Invoicing, Issue, PermanentStorage) i dodaje faktury(nazwa pliku: **{ksefNumber}.xml**) do paczki aż do osiągnięcia jednego z poniższych limitów:

- Limit liczby faktur: 10 000 sztuk
- Limit rozmiaru danych(skompresowanych): 1GB

Paczka eksportu zawiera dodatkowy plik z metadanymi faktur w formacie JSON (`_metadata.json`). Zawartość pliku to
obiekt z tablicą **invoices**, gdzie każdy element jest obiektem typu **InvoiceMetadata**
(taki jak zwracany przez endpoint `POST /invoices/query/metadata`).

**Plik z metadanymi(\_metadata.json) nie jest wliczany do limitów algorytmu budowania paczki**.

`Do realizacji pobierania przyrostowego należy stosować filtrowanie po dacie PermanentStorage`.

**Sortowanie:**

- permanentStorageDate \| invoicingDate \| issueDate (Asc) - pole wybierane na podstawie filtrów

**Wymagane uprawnienia**: `InvoiceRead`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

Dane wejściowe określające kryteria i format eksportu paczki faktur.

|     |     |
| --- | --- |
| encryption<br>required | object<br>Informacje wymagane do zaszyfrowania wyniku zapytania. |
| filters<br>required | object<br>Zestaw filtrów do wyszukiwania faktur. |

### Responses

**201**

Created

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny eksportu faktur. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 40 | 80 | 200 | invoiceExport |

post/api/v2/invoices/exports

https://ksef-test.mf.gov.pl/api/v2/invoices/exports

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"encryption": {"encryptedSymmetricKey": "bdUVjqLj+y2q6aBUuLxxXYAMqeDuIBRTyr+hB96DaWKaGzuVHw9p+Nk9vhzgF/Q5cavK2k6eCh6SdsrWI0s9mFFj4A4UJtsyD8Dn3esLfUZ5A1juuG3q3SBi/XOC/+9W+0T/KdwdE393mbiUNyx1K/0bw31vKJL0COeJIDP7usAMDl42/H1TNvkjk+8iZ80V0qW7D+RZdz+tdiY1xV0f2mfgwJ46V0CpZ+sB9UAssRj+eVffavJ0TOg2b5JaBxE8MCAvrF6rO5K4KBjUmoy7PP7g1qIbm8xI2GO0KnfPOO5OWj8rsotRwBgu7x19Ine3qYUvuvCZlXRGGZ5NHIzWPM4O74+gNalaMgFCsmv8mMhETSU4SfAGmJr9edxPjQSbgD5i2X4eDRDMwvyaAa7CP1b2oICju+0L7Fywd2ZtUcr6El++eTVoi8HYsTArntET++gULT7XXjmb8e3O0nxrYiYsE9GMJ7HBGv3NOoJ1NTm3a7U6+c0ZJiBVLvn6xXw10LQX243xH+ehsKo6djQJKYtqcNPaXtCwM1c9RrsOx/wRXyWCtTffqLiaR0LbYvfMJAcEWceG+RaeAx4p37OiQqdJypd6LAv9/0ECWK8Bip8yyoA+0EYiAJb9YuDz2YlQX9Mx9E9FzFIAsgEQ2w723HZYWgPywLb+dlsum4lTZKQ=",

"initializationVector": "c29tZUluaXRWZWN0b3I="

},

"filters": {"subjectType": "Subject1",

"dateRange": {"dateType": "PermanentStorage",

"from": "2025-08-28T09:22:13.388+00:00",

"to": "2025-09-28T09:22:13.388+00:00",

"restrictToPermanentStorageHwmDate": true

}

}

}`

### Response samples

- 201
- 400

Content type

application/json

Copy

`{"referenceNumber": "20251010-EH-1B6C9EB000-4B15D3AEB9-89"

}`

## [tag/Pobieranie-faktur/paths/~1api~1v2~1invoices~1exports~1{referenceNumber}/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Pobieranie-faktur/paths/~1api~1v2~1invoices~1exports~1{referenceNumber}/get) Pobranie statusu eksportu paczki faktur

Paczka faktur jest dzielona na części o maksymalnym rozmiarze 50 MB. Każda część jest zaszyfrowana algorytmem AES-256-CBC z dopełnieniem PKCS#7, przy użyciu klucza symetrycznego przekazanego podczas inicjowania eksportu.

W przypadku ucięcia wyniku eksportu z powodu przekroczenia limitów, zwracana jest flaga **IsTruncated = true** oraz odpowiednia data, którą należy wykorzystać do wykonania kolejnego eksportu, aż do momentu, gdy flaga **IsTruncated = false**.

**Sortowanie:**

- permanentStorageDate \| invoicingDate \| issueDate (Asc) - pole wybierane na podstawie filtrów

**Wymagane uprawnienia**: `InvoiceRead`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny eksportu faktur. |

### Responses

**200**

OK

##### Response Schema: application/json

| status<br>required | object

Status eksportu.

| Code | Description | Details |
| --- | --- | --- |
| 100 | Eksport faktur w toku | - |
| 200 | Eksport faktur zakończony sukcesem | - |
| 210 | Eksport faktur wygasł i nie jest już dostępny do pobrania | - |
| 415 | Błąd odszyfrowania dostarczonego klucza | - |
| 420 | Zakres filtrowania wykracza poza dostępny zakres danych | Parametr dateRange.from jest późniejszy niż PermanentStorageHwmDate przy włączonym restrictToPermanentStorageHwmDate. |
| 500 | Nieznany błąd ({statusCode}) | - |
| 550 | Operacja została anulowana przez system | Przetwarzanie zostało przerwane z przyczyn wewnętrznych systemu. Spróbuj ponownie | |
| completedDate | string or null <date-time> <br>Data zakończenia przetwarzania żądania eksportu faktur. |
| packageExpirationDate | string or null <date-time> <br>Data wygaśnięcia paczki faktur przygotowanej do pobrania.<br>Po upływie tej daty paczka nie będzie już dostępna do pobrania. |
| package | object or null<br>Dane paczki faktur przygotowanej do pobrania. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

get/api/v2/invoices/exports/{referenceNumber}

https://ksef-test.mf.gov.pl/api/v2/invoices/exports/{referenceNumber}

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"status": {"code": 200,

"description": "Eksport faktur zakończony sukcesem"

},

"completedDate": "2025-09-16T16:09:40.901091+00:00",

"package": {"invoiceCount": 10000,

"size": 22425060,

"parts": [{"ordinalNumber": 1,\
\
"partName": "20250925-EH-2D2C11B000-E9C9ED8340-EE-001.zip.aes",\
\
"method": "GET",\
\
"url": "https://ksef-api-storage/storage/00/20250626-eh-2d2c11b000-e9c9ed8340-ee/invoice-part/20250925-EH-2D2C11B000-E9C9ED8340-EE-001.zip.aes?skoid=1ad7cfe8-2cb2-406b-b96c-6eefb55794db&sktid=647754c7-3974-4442-a425-c61341b61c69&skt=2025-06-26T09%3A40%3A54Z&ske=2025-06-26T10%3A10%3A54Z&sks=b&skv=2025-01-05&sv=2025-01-05&se=2025-06-26T10%3A10%3A54Z&sr=b&sp=w&sig=8mKZEU8Reuz%2Fn7wHi4T%2FY8BzLeD5l8bR2xJsBxIgDEY%3D",\
\
"partSize": 22425060,\
\
"partHash": "BKH9Uy1CjBFXiQdDUM2CJYk5LxWTm4fE1lljnl83Ajw=",\
\
"encryptedPartSize": 22425072,\
\
"encryptedPartHash": "HlvwRLc59EJH7O5GoeHEZxTQO5TJ/WP1QH0aFi4x2Ss=",\
\
"expirationDate": "2025-09-16T17:09:40.901091+00:00"\
\
}\
\
],

"isTruncated": true,

"lastPermanentStorageDate": "2025-09-11T11:40:40.266578+00:00",

"permanentStorageHwmDate": "2025-09-11T12:00:40.266578+00:00"

}

}`

## [tag/Nadawanie-uprawnien](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Nadawanie-uprawnien) Nadawanie uprawnień

## [tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1persons~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1persons~1grants/post) Nadanie osobom fizycznym uprawnień do pracy w KSeF

Metoda pozwala na nadanie osobie wskazanej w żądaniu uprawnień do pracy w KSeF

w kontekście bieżącym.

W żądaniu określane są nadawane uprawnienia ze zbioru:

- **InvoiceWrite** – wystawianie faktur,
- **InvoiceRead** – przeglądanie faktur,
- **CredentialsManage** – zarządzanie uprawnieniami,
- **CredentialsRead** – przeglądanie uprawnień,
- **Introspection** – przeglądanie historii sesji i generowanie UPO,
- **SubunitManage** – zarządzanie jednostkami podrzędnymi,
- **EnforcementOperations** – wykonywanie operacji egzekucyjnych.

Metoda pozwala na wybór dowolnej kombinacji powyższych uprawnień.

Uprawnienie **EnforcementOperations** może być nadane wyłącznie wtedy,

gdy podmiot kontekstu ma rolę **EnforcementAuthority** (organ egzekucyjny)

lub **CourtBailiff** (komornik sądowy).

> Więcej informacji:
>
> - [Nadawanie uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#nadawanie-uprawnie%C5%84-osobom-fizycznym-do-pracy-w-ksef)

**Wymagane uprawnienia**: `CredentialsManage`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

| subjectIdentifier<br>required | object

Identyfikator osoby fizycznej.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| Pesel | 11 cyfrowy numer PESEL |
| Fingerprint | Odcisk palca certyfikatu | |
| permissions<br>required | Array of strings (PersonPermissionType) <br>Items Enum:"CredentialsManage""CredentialsRead""InvoiceWrite""InvoiceRead""Introspection""SubunitManage""EnforcementOperations"<br>Lista nadawanych uprawnień. Każda wartość może wystąpić tylko raz. |
| description<br>required | string \[ 5 .. 256 \] characters <br>Opis uprawnienia |
| subjectDetails | object or null<br>Dane podmiotu, któremu nadawane są uprawnienia. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/persons/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/persons/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subjectIdentifier": {"type": "Pesel",

"value": "15062788702"

},

"permissions": ["InvoiceRead",\
\
"InvoiceWrite",\
\
"Introspection",\
\
"CredentialsRead"\
\
],

"description": "Opis uprawnienia"

}`

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250626-EG-333C814000-C529F710D8-D2"

}`

## [tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1entities~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1entities~1grants/post) Nadanie podmiotom uprawnień do obsługi faktur

Metoda pozwala na nadanie podmiotowi wskazanemu w żądaniu uprawnień do obsługi faktur podmiotu kontekstu.

W żądaniu określane są nadawane uprawnienia ze zbioru:

- **InvoiceWrite** – wystawianie faktur
- **InvoiceRead** – przeglądanie faktur

Metoda pozwala na wybór dowolnej kombinacji powyższych uprawnień.

Dla każdego uprawnienia może być ustawiona flaga **canDelegate**, mówiąca o możliwości jego dalszego przekazywania poprzez nadawanie w sposób pośredni.

> Więcej informacji:
>
> - [Nadawanie uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#nadanie-podmiotom-uprawnie%C5%84-do-obs%C5%82ugi-faktur)

**Wymagane uprawnienia**: `CredentialsManage`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

| subjectIdentifier<br>required | object

Identyfikator podmiotu.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP | |
| permissions<br>required | Array of objects (EntityPermission) <br>Lista nadawanych uprawnień. Każda wartość może wystąpić tylko raz. |
| description<br>required | string \[ 5 .. 256 \] characters <br>Opis uprawnienia |
| subjectDetails | object or null<br>Dane podmiotu, któremu nadawane są uprawnienia. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/entities/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/entities/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subjectIdentifier": {"type": "Nip",

"value": "7762811692"

},

"permissions": [{"type": "InvoiceRead",\
\
"canDelegate": true\
\
},\
\
{"type": "InvoiceWrite",\
\
"canDelegate": true\
\
}\
\
],

"description": "Opis uprawnienia"

}`

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250626-EG-333C814000-C529F710D8-D2"

}`

## [tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1authorizations~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1authorizations~1grants/post) Nadanie uprawnień podmiotowych

Metoda pozwala na nadanie jednego z uprawnień podmiotowych do obsługi podmiotu kontekstu podmiotowi wskazanemu w żądaniu.

> Więcej informacji:
>
> - [Nadawanie uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#nadanie-uprawnie%C5%84-podmiotowych)

**Wymagane uprawnienia**: `CredentialsManage`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

| subjectIdentifier<br>required | object

Identyfikator podmiotu uprawnianego.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| PeppolId | Identyfikator dostawcy usług Peppol | |
| permission<br>required | string<br>Enum:"SelfInvoicing""RRInvoicing""TaxRepresentative""PefInvoicing"<br>Rodzaj uprawnienia. |
| description<br>required | string \[ 5 .. 256 \] characters <br>Opis uprawnienia |
| subjectDetails | object or null<br>Dane podmiotu, któremu nadawane są uprawnienia. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/authorizations/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/authorizations/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subjectIdentifier": {"type": "Nip",

"value": "7762811692"

},

"permission": "SelfInvoicing",

"description": "działanie w imieniu 3393244202 w kontekście 7762811692, Firma sp. z o.o."

}`

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250626-EG-333C814000-C529F710D8-D2"

}`

## [tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1indirect~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1indirect~1grants/post) Nadanie uprawnień w sposób pośredni

Metoda pozwala na nadanie w sposób pośredni osobie wskazanej w żądaniu uprawnień do obsługi faktur innego podmiotu – klienta.

Może to być jedna z możliwości:

- nadanie uprawnień generalnych – do obsługi wszystkich klientów
- nadanie uprawnień selektywnych – do obsługi wskazanego klienta

Uprawnienie selektywne może być nadane wyłącznie wtedy, gdy klient nadał wcześniej podmiotowi bieżącego kontekstu dowolne uprawnienie z prawem do jego dalszego przekazywania (patrz [POST /api/v2/permissions/entities/grants](https://ksef-test.mf.gov.pl/docs/v2/index.html#tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1entities~1grants/post)).

W żądaniu określane są nadawane uprawnienia ze zbioru:

- **InvoiceWrite** – wystawianie faktur
- **InvoiceRead** – przeglądanie faktur

Metoda pozwala na wybór dowolnej kombinacji powyższych uprawnień.

> Więcej informacji:
>
> - [Nadawanie uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#nadanie-uprawnie%C5%84-w-spos%C3%B3b-po%C5%9Bredni)

**Wymagane uprawnienia**: `CredentialsManage`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

| subjectIdentifier<br>required | object

Identyfikator osoby fizycznej.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| Pesel | 11 cyfrowy numer PESEL |
| Fingerprint | Odcisk palca certyfikatu | |
| targetIdentifier | object or null

Identyfikator kontekstu klienta. Nie przekazanie identyfikatora oznacza, że uprawnienie nadane w sposób pośredni jest typu generalnego.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| AllPartners | Identyfikator oznaczający, że uprawnienie nadane w sposób pośredni jest typu generalnego |
| InternalId | Dwuczłonowy identyfikator składający się z numeru NIP i 5 cyfr: `{nip}-{5_cyfr}` | |
| permissions<br>required | Array of strings (IndirectPermissionType) <br>Items Enum:"InvoiceRead""InvoiceWrite"<br>Lista nadawanych uprawnień. Każda wartość może wystąpić tylko raz. |
| description<br>required | string \[ 5 .. 256 \] characters <br>Opis uprawnienia |
| subjectDetails | object or null<br>Dane podmiotu, któremu nadawane są uprawnienia. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/indirect/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/indirect/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subjectIdentifier": {"type": "Pesel",

"value": "22271569167"

},

"targetIdentifier": {"type": "Nip",

"value": "5687926712"

},

"permissions": ["InvoiceWrite",\
\
"InvoiceRead"\
\
],

"description": "praca dla klienta 5687926712; uprawniony PESEL: 22271569167, Adam Abacki; pośrednik 3936518395"

}`

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250626-EG-333C814000-C529F710D8-D2"

}`

## [tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1subunits~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1subunits~1grants/post) Nadanie uprawnień administratora podmiotu podrzędnego

Metoda pozwala na nadanie wskazanemu w żądaniu podmiotowi lub osobie fizycznej uprawnień administratora w kontekście:

- wskazanego NIP podmiotu podrzędnego – wyłącznie jeżeli podmiot bieżącego kontekstu logowania ma rolę podmiotu nadrzędnego:
  - **LocalGovernmentUnit**
  - **VatGroupUnit**
- wskazanego lub utworzonego identyfikatora wewnętrznego

Wraz z utworzeniem administratora jednostki podrzędnej tworzony jest identyfikator wewnętrzny składający się z numeru NIP podmiotu kontekstu logowania oraz 5 cyfr unikalnie identyfikujących jednostkę wewnętrzną.

W żądaniu podaje się również nazwę tej jednostki.

Uprawnienia administratora jednostki podrzędnej obejmują:

- **CredentialsManage** – zarządzanie uprawnieniami

Metoda automatycznie nadaje powyższe uprawnienie, bez konieczności podawania go w żądaniu.

> Więcej informacji:
>
> - [Nadawanie uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#nadanie-uprawnie%C5%84-administratora-podmiotu-podrz%C4%99dnego)

**Wymagane uprawnienia**: `SubunitManage`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

| subjectIdentifier<br>required | object

Identyfikator podmiotu lub osoby fizycznej.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| Pesel | 11 cyfrowy numer PESEL |
| Fingerprint | Odcisk palca certyfikatu | |
| contextIdentifier<br>required | object

Identyfikator podmiotu podrzędnego.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| InternalId | Dwuczłonowy identyfikator składający się z numeru NIP i 5 cyfr: `{nip}-{5_cyfr}` | |
| description<br>required | string \[ 5 .. 256 \] characters <br>Opis uprawnienia |
| subunitName | string or null \[ 5 .. 256 \] characters <br>Nazwa jednostki podrzędnej. W przypadku jednostki podrzędnej z identyfikatorem wewnętrznym pole jest wymagane. |
| subjectDetails | object or null<br>Dane podmiotu, któremu nadawane są uprawnienia. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/subunits/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/subunits/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subjectIdentifier": {"type": "Pesel",

"value": "15062788702"

},

"contextIdentifier": {"type": "InternalId",

"value": "7762811692-12345"

},

"description": "Opis uprawnienia",

"subunitName": "Jednostka 014"

}`

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250626-EG-333C814000-C529F710D8-D2"

}`

## [tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1eu-entities~1administration~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1eu-entities~1administration~1grants/post) Nadanie uprawnień administratora podmiotu unijnego

Metoda pozwala na nadanie wskazanemu w żądaniu podmiotowi lub osobie fizycznej uprawnień administratora w kontekście złożonym z identyfikatora NIP podmiotu kontekstu bieżącego oraz numeru VAT UE podmiotu unijnego wskazanego w żądaniu.

Wraz z utworzeniem administratora podmiotu unijnego tworzony jest kontekst złożony składający się z numeru NIP podmiotu kontekstu logowania oraz wskazanego numeru identyfikacyjnego VAT UE podmiotu unijnego.

W żądaniu podaje się również nazwę i adres podmiotu unijnego.

Jedynym sposobem identyfikacji uprawnianego jest odcisk palca certyfikatu kwalifikowanego:

- certyfikat podpisu elektronicznego dla osób fizycznych
- certyfikat pieczęci elektronicznej dla podmiotów

Uprawnienia administratora podmiotu unijnego obejmują:

- **VatEuManage** – zarządzanie uprawnieniami w ramach podmiotu unijnego
- **InvoiceWrite** – wystawianie faktur
- **InvoiceRead** – przeglądanie faktur
- **Introspection** – przeglądanie historii sesji

Metoda automatycznie nadaje wszystkie powyższe uprawnienia, bez konieczności ich wskazywania w żądaniu.

> Więcej informacji:
>
> - [Nadawanie uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#nadanie-uprawnie%C5%84-administratora-podmiotu-unijnego)

**Wymagane uprawnienia**: `CredentialsManage`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

| subjectIdentifier<br>required | object

Identyfikator podmiotu uprawnionego.

| Type | Value |
| --- | --- |
| Fingerprint | Odcisk palca certyfikatu | |
| contextIdentifier<br>required | object

Identyfikator kontekstu złożonego.

| Type | Value |
| --- | --- |
| NipVatUe | Dwuczłonowy identyfikator składający się z numeru NIP i numeru VAT-UE: `{nip}-{vat_ue}` | |
| description<br>required | string \[ 5 .. 256 \] characters <br>Opis uprawnienia |
| euEntityName<br>required | string \[ 5 .. 256 \] characters <br>Nazwa i adres podmiotu unijnego w formacie: <br>`{euSubjectName}, {euSubjectAddress}` |
| subjectDetails | object or null<br>Dane podmiotu, któremu nadawane są uprawnienia. |
| euEntityDetails | object or null<br>Dane podmiotu unijnego, którego dotyczy nadawane uprawnienie. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/eu-entities/administration/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/eu-entities/administration/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subjectIdentifier": {"type": "Fingerprint",

"value": "CEB3643BAC2C111ADDE971BDA5A80163441867D65389FC0BC0DFF8B4C1CD4E59"

},

"contextIdentifier": {"type": "NipVatUe",

"value": "7762811692-DE123456789012"

},

"description": "Opis uprawnienia",

"euEntityName": "Firma G.m.b.H."

}`

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250626-EG-333C814000-C529F710D8-D2"

}`

## [tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1eu-entities~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Nadawanie-uprawnien/paths/~1api~1v2~1permissions~1eu-entities~1grants/post) Nadanie uprawnień reprezentanta podmiotu unijnego

Metoda pozwala na nadanie wskazanemu w żądaniu podmiotowi lub osobie fizycznej uprawnień do wystawiania i/lub przeglądania faktur w kontekście złożonym kontekstu bieżącego.

Jedynym sposobem identyfikacji uprawnianego jest odcisk palca certyfikatu kwalifikowanego:

- certyfikat podpisu elektronicznego dla osób fizycznych
- certyfikat pieczęci elektronicznej dla podmiotów

W żądaniu określane są nadawane uprawnienia ze zbioru:

- **InvoiceWrite** – wystawianie faktur
- **InvoiceRead** – przeglądanie faktur

Metoda pozwala na wybór dowolnej kombinacji powyższych uprawnień.

> Więcej informacji:
>
> - [Nadawanie uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#nadanie-uprawnie%C5%84-reprezentanta-podmiotu-unijnego)

**Wymagane uprawnienia**: `VatUeManage`.

##### Authorizations:

_Bearer_

##### Request Body schema: application/json

| subjectIdentifier<br>required | object

Identyfikator podmiotu uprawnianego.

| Type | Value |
| --- | --- |
| Fingerprint | Odcisk palca certyfikatu | |
| permissions<br>required | Array of strings (EuEntityPermissionType) <br>Items Enum:"InvoiceWrite""InvoiceRead"<br>Lista nadawanych uprawnień. Każda wartość może wystąpić tylko raz. |
| description<br>required | string \[ 5 .. 256 \] characters <br>Opis uprawnienia |
| subjectDetails | object or null<br>Dane podmiotu, któremu nadawane są uprawnienia. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/eu-entities/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/eu-entities/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subjectIdentifier": {"type": "Fingerprint",

"value": "CEB3643BAC2C111ADDE971BDA5A80163441867D65389FC0BC0DFF8B4C1CD4E59"

},

"permissions": ["InvoiceRead",\
\
"InvoiceWrite"\
\
],

"description": "Opis uprawnienia"

}`

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250626-EG-333C814000-C529F710D8-D2"

}`

## [tag/Odbieranie-uprawnien](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Odbieranie-uprawnien) Odbieranie uprawnień

## [tag/Odbieranie-uprawnien/paths/~1api~1v2~1permissions~1common~1grants~1{permissionId}/delete](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Odbieranie-uprawnien/paths/~1api~1v2~1permissions~1common~1grants~1{permissionId}/delete) Odebranie uprawnień

Metoda pozwala na odebranie uprawnienia o wskazanym identyfikatorze.

Wymagane jest wcześniejsze odczytanie uprawnień w celu uzyskania

identyfikatora uprawnienia, które ma zostać odebrane.

> Więcej informacji:
>
> - [Odbieranie uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#odebranie-uprawnie%C5%84)

**Wymagane uprawnienia**: `CredentialsManage`, `VatUeManage`, `SubunitManage`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| permissionId<br>required | string (PermissionId)  = 36 characters <br>Id uprawnienia. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

delete/api/v2/permissions/common/grants/{permissionId}

https://ksef-test.mf.gov.pl/api/v2/permissions/common/grants/{permissionId}

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250626-EG-333C814000-C529F710D8-D2"

}`

## [tag/Odbieranie-uprawnien/paths/~1api~1v2~1permissions~1authorizations~1grants~1{permissionId}/delete](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Odbieranie-uprawnien/paths/~1api~1v2~1permissions~1authorizations~1grants~1{permissionId}/delete) Odebranie uprawnień podmiotowych

Metoda pozwala na odebranie uprawnienia podmiotowego o wskazanym identyfikatorze.

Wymagane jest wcześniejsze odczytanie uprawnień w celu uzyskania

identyfikatora uprawnienia, które ma zostać odebrane.

> Więcej informacji:
>
> - [Odbieranie uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#odebranie-uprawnie%C5%84-podmiotowych)

**Wymagane uprawnienia**: `CredentialsManage`.

##### Authorizations:

_Bearer_

##### path Parameters

|     |     |
| --- | --- |
| permissionId<br>required | string (PermissionId)  = 36 characters <br>Id uprawnienia. |

### Responses

**202**

Accepted

##### Response Schema: application/json

|     |     |
| --- | --- |
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

delete/api/v2/permissions/authorizations/grants/{permissionId}

https://ksef-test.mf.gov.pl/api/v2/permissions/authorizations/grants/{permissionId}

### Response samples

- 202
- 400

Content type

application/json

Copy

`{"referenceNumber": "20250626-EG-333C814000-C529F710D8-D2"

}`

## [tag/Wyszukiwanie-nadanych-uprawnien](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wyszukiwanie-nadanych-uprawnien) Wyszukiwanie nadanych uprawnień

## [tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1personal~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1personal~1grants/post) Pobranie listy własnych uprawnień

Metoda pozwala na odczytanie własnych uprawnień uwierzytelnionego klienta API w bieżącym kontekście logowania.

W odpowiedzi przekazywane są następujące uprawnienia:

- nadane w sposób bezpośredni w bieżącym kontekście
- nadane przez podmiot nadrzędny
- nadane w sposób pośredni, jeżeli podmiot kontekstu logowania jest w uprawnieniu pośrednikiem lub podmiotem docelowym
- nadane podmiotowi do obsługi faktur przez inny podmiot, jeśli podmiot uwierzytelniony ma w bieżącym kontekście uprawnienia właścicielskie

Uprawnienia zwracane przez operację obejmują:

- **CredentialsManage** – zarządzanie uprawnieniami
- **CredentialsRead** – przeglądanie uprawnień
- **InvoiceWrite** – wystawianie faktur
- **InvoiceRead** – przeglądanie faktur
- **Introspection** – przeglądanie historii sesji
- **SubunitManage** – zarządzanie podmiotami podrzędnymi
- **EnforcementOperations** – wykonywanie operacji egzekucyjnych
- **VatEuManage** – zarządzanie uprawnieniami w ramach podmiotu unijnego

Odpowiedź może być filtrowana na podstawie następujących parametrów:

- **contextIdentifier** – identyfikator podmiotu, który nadał uprawnienie do obsługi faktur
- **targetIdentifier** – identyfikator podmiotu docelowego dla uprawnień nadanych pośrednio
- **permissionTypes** – lista rodzajów wyszukiwanych uprawnień
- **permissionState** – status uprawnienia

#### Stronicowanie wyników

Zapytanie zwraca **jedną stronę wyników** o numerze i rozmiarze podanym w ścieżce.

- Przy pierwszym wywołaniu należy ustawić parametr `pageOffset = 0`.
- Jeżeli dostępna jest kolejna strona wyników, w odpowiedzi pojawi się flaga **`hasMore`**.
- W takim przypadku można wywołać zapytanie ponownie z kolejnym numerem strony.

> Więcej informacji:
>
> - [Pobieranie listy uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#pobranie-listy-w%C5%82asnych-uprawnie%C5%84)

**Sortowanie:**

- startDate (Desc)

##### Authorizations:

_Bearer_

##### query Parameters

|     |     |
| --- | --- |
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Numer strony wyników. |
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### Request Body schema: application/json

| contextIdentifier | object or null

Identyfikator kontekstu podmiotu, który nadał uprawnienia do obsługi faktur.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP | |
| targetIdentifier | object or null

Identyfikator podmiotu docelowego dla uprawnień selektywnych nadanych pośrednio.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| AllPartners | Identyfikator oznaczający, że wyszukiwanie dotyczy uprawnień generalnych nadanych w sposób pośredni |
| InternalId | Dwuczłonowy identyfikator składający się z numeru NIP i 5 cyfr: `{nip}-{5_cyfr}` | |
| permissionTypes | Array of strings or null (PersonalPermissionType) <br>Enum:"CredentialsManage""CredentialsRead""InvoiceWrite""InvoiceRead""Introspection""SubunitManage""EnforcementOperations""VatUeManage"<br>Lista rodzajów wyszukiwanych uprawnień. |
| permissionState | string or null

Enum:"Active""Inactive"

Stan uprawnienia.

| Type | Value |
| --- | --- |
| Active | Uprawnienia aktywne |
| Inactive | Uprawnienia nieaktywne | |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| permissions<br>required | Array of objects (PersonalPermission) <br>Lista odczytanych uprawnień. |
| hasMore<br>required | boolean<br>Flaga informująca o dostępności kolejnej strony wyników. |

**400**

Bad Request

**401**

Unauthorized

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/query/personal/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/query/personal/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"contextIdentifier": {"type": "Nip",

"value": "3568707925"

},

"permissionTypes": ["InvoiceWrite"\
\
],

"permissionState": "Active"

}`

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"permissions": [{"id": "0c9a72e8-f344-457f-9c16-7c640eb60242",\
\
"contextIdentifier": {"type": "Nip",\
\
"value": "3568707925"\
\
},\
\
"authorizedIdentifier": {"type": "Nip",\
\
"value": "5247677742"\
\
},\
\
"permissionScope": "InvoiceWrite",\
\
"description": "Opis uprawnienia",\
\
"permissionState": "Active",\
\
"startDate": "2025-06-22T10:41:11+00:00",\
\
"canDelegate": false\
\
}\
\
],

"hasMore": false

}`

## [tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1persons~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1persons~1grants/post) Pobranie listy uprawnień do pracy w KSeF nadanych osobom fizycznym lub podmiotom

Metoda pozwala na odczytanie uprawnień nadanych osobie fizycznej lub podmiotowi.

Lista pobranych uprawnień może być dwóch rodzajów:

- Lista wszystkich uprawnień obowiązujących w bieżącym kontekście logowania (używana, gdy administrator chce przejrzeć uprawnienia wszystkich użytkowników w bieżącym kontekście)
- Lista wszystkich uprawnień nadanych w bieżącym kontekście przez uwierzytelnionego klienta API (używana, gdy administrator chce przejrzeć listę nadanych przez siebie uprawnień w bieżącym kontekście)

Dla pierwszej listy (obowiązujących uprawnień) w odpowiedzi przekazywane są:

- osoby i podmioty mogące pracować w bieżącym kontekście z wyjątkiem osób uprawnionych w sposób pośredni
- osoby uprawnione w sposób pośredni przez podmiot bieżącego kontekstu

Dla drugiej listy (nadanych uprawnień) w odpowiedzi przekazywane są:

- uprawnienia nadane w sposób bezpośredni do pracy w bieżącym kontekście lub w kontekście jednostek podrzędnych
- uprawnienia nadane w sposób pośredni do obsługi klientów podmiotu bieżącego kontekstu

Uprawnienia zwracane przez operację obejmują:

- **CredentialsManage** – zarządzanie uprawnieniami
- **CredentialsRead** – przeglądanie uprawnień
- **InvoiceWrite** – wystawianie faktur
- **InvoiceRead** – przeglądanie faktur
- **Introspection** – przeglądanie historii sesji
- **SubunitManage** – zarządzanie podmiotami podrzędnymi
- **EnforcementOperations** – wykonywanie operacji egzekucyjnych

Odpowiedź może być filtrowana na podstawie parametrów:

- **authorIdentifier** – identyfikator osoby, która nadała uprawnienie
- **authorizedIdentifier** – identyfikator osoby lub podmiotu uprawnionego
- **targetIdentifier** – identyfikator podmiotu docelowego dla uprawnień nadanych pośrednio
- **permissionTypes** – lista rodzajów wyszukiwanych uprawnień
- **permissionState** – status uprawnienia
- **queryType** – typ zapytania określający, która z dwóch list ma zostać zwrócona

#### Stronicowanie wyników

Zapytanie zwraca **jedną stronę wyników** o numerze i rozmiarze podanym w ścieżce.

- Przy pierwszym wywołaniu należy ustawić parametr `pageOffset = 0`.
- Jeżeli dostępna jest kolejna strona wyników, w odpowiedzi pojawi się flaga **`hasMore`**.
- W takim przypadku można wywołać zapytanie ponownie z kolejnym numerem strony.

> Więcej informacji:
>
> - [Pobieranie listy uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#pobranie-listy-uprawnie%C5%84-do-pracy-w-ksef-nadanych-osobom-fizycznym-lub-podmiotom)

**Sortowanie:**

- startDate (Desc)

**Wymagane uprawnienia**: `CredentialsManage`, `CredentialsRead`, `SubunitManage`.

##### Authorizations:

_Bearer_

##### query Parameters

|     |     |
| --- | --- |
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Numer strony wyników. |
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### Request Body schema: application/json

| authorIdentifier | object or null

Identyfikator osoby lub podmiotu nadającego uprawnienie.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| Pesel | 11 cyfrowy numer PESEL |
| Fingerprint | Odcisk palca certyfikatu |
| System | Identyfikator systemowy KSeF | |
| authorizedIdentifier | object or null

Identyfikator osoby lub podmiotu uprawnionego.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| Pesel | 11 cyfrowy numer PESEL |
| Fingerprint | Odcisk palca certyfikatu | |
| contextIdentifier | object or null

Identyfikator kontekstu uprawnienia (dla uprawnień nadanych administratorom jednostek podrzędnych).

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| InternalId | Dwuczłonowy identyfikator składający się z numeru NIP i 5 cyfr: `{nip}-{5_cyfr}` | |
| targetIdentifier | object or null

Identyfikator podmiotu docelowego dla uprawnień nadanych pośrednio.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| AllPartners | Identyfikator oznaczający, że uprawnienie nadane w sposób pośredni jest typu generalnego |
| InternalId | Dwuczłonowy identyfikator składający się z numeru NIP i 5 cyfr: `{nip}-{5_cyfr}` | |
| permissionTypes | Array of strings or null (PersonPermissionType) <br>Enum:"CredentialsManage""CredentialsRead""InvoiceWrite""InvoiceRead""Introspection""SubunitManage""EnforcementOperations"<br>Lista rodzajów wyszukiwanych uprawnień. |
| permissionState | string or null

Enum:"Active""Inactive"

Stan uprawnienia.

| Type | Value |
| --- | --- |
| Active | Uprawnienia aktywne |
| Inactive | Uprawnienia nieaktywne, nadane w sposób poœredni | |
| queryType<br>required | string

Enum:"PermissionsInCurrentContext""PermissionsGrantedInCurrentContext"

Typ zapytania.

| Type | Value |
| --- | --- |
| PermissionsInCurrentContext | Lista uprawnień obowiązujących w bieżącym kontekście |
| PermissionsGrantedInCurrentContext | Lista uprawnień nadanych w bieżącym kontekście | |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| permissions<br>required | Array of objects (PersonPermission) <br>Lista odczytanych uprawnień. |
| hasMore<br>required | boolean<br>Flaga informująca o dostępności kolejnej strony wyników. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/query/persons/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/query/persons/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"authorIdentifier": {"type": "Nip",

"value": "7762811692"

},

"permissionTypes": ["CredentialsManage",\
\
"CredentialsRead",\
\
"InvoiceWrite"\
\
],

"permissionState": "Active",

"queryType": "PermissionsInCurrentContext"

}`

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"permissions": [{"id": "0c9a72e8-f344-457f-9c16-7c640eb60242",\
\
"authorizedIdentifier": {"type": "Nip",\
\
"value": "7762811692"\
\
},\
\
"targetIdentifier": {"type": "Nip",\
\
"value": "9786214922"\
\
},\
\
"authorIdentifier": {"type": "Pesel",\
\
"value": "15062788702"\
\
},\
\
"permissionScope": "InvoiceWrite",\
\
"description": "praca dla klienta 9786214922; uprawniony NIP: 7762811692, Adam Abacki; pośrednik 3936518395",\
\
"permissionState": "Active",\
\
"startDate": "2025-06-22T10:41:11+00:00",\
\
"canDelegate": false\
\
}\
\
],

"hasMore": false

}`

## [tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1subunits~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1subunits~1grants/post) Pobranie listy uprawnień administratorów jednostek i podmiotów podrzędnych

Metoda pozwala na odczytanie uprawnień do zarządzania uprawnieniami nadanych administratorom:

- jednostek podrzędnych identyfikowanych identyfikatorem wewnętrznym
- podmiotów podrzędnych (podrzędnych JST lub członków grupy VAT) identyfikowanych przez NIP

Lista zwraca wyłącznie uprawnienia do zarządzania uprawnieniami nadane z kontekstu bieżącego (z podmiotu nadrzędnego).

Nie są odczytywane uprawnienia nadane przez administratorów jednostek podrzędnych wewnątrz tych jednostek.

Odpowiedź może być filtrowana na podstawie parametru:

- **subunitIdentifier** – identyfikator jednostki lub podmiotu podrzędnego

#### Stronicowanie wyników

Zapytanie zwraca **jedną stronę wyników** o numerze i rozmiarze podanym w ścieżce.

- Przy pierwszym wywołaniu należy ustawić parametr `pageOffset = 0`.
- Jeżeli dostępna jest kolejna strona wyników, w odpowiedzi pojawi się flaga **`hasMore`**.
- W takim przypadku można wywołać zapytanie ponownie z kolejnym numerem strony.

> Więcej informacji:
>
> - [Pobieranie listy uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#pobranie-listy-uprawnie%C5%84-administrator%C3%B3w-jednostek-i-podmiot%C3%B3w-podrz%C4%99dnych)

**Sortowanie:**

- startDate (Desc)

**Wymagane uprawnienia**: `CredentialsManage`, `CredentialsRead`, `SubunitManage`.

##### Authorizations:

_Bearer_

##### query Parameters

|     |     |
| --- | --- |
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Numer strony wyników. |
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### Request Body schema: application/json

| subunitIdentifier | object or null

Identyfikator jednostki lub podmiotu podrzędnego.

| Type | Value |
| --- | --- |
| InternalId | Dwuczłonowy identyfikator składający się z numeru NIP i 5 cyfr: `{nip}-{5_cyfr}` |
| Nip | 10 cyfrowy numer NIP | |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| permissions<br>required | Array of objects (SubunitPermission) <br>Lista odczytanych uprawnień. |
| hasMore<br>required | boolean<br>Flaga informująca o dostępności kolejnej strony wyników. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/query/subunits/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/query/subunits/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subunitIdentifier": {"type": "InternalId",

"value": "7762811692-12345"

}

}`

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"permissions": [{"id": "0c9a72e8-f344-457f-9c16-7c640eb60242",\
\
"authorizedIdentifier": {"type": "Fingerprint",\
\
"value": "CEB3643BAC2C111ADDE971BDA5A80163441867D65389FC0BC0DFF8B4C1CD4E59"\
\
},\
\
"subunitIdentifier": {"type": "InternalId",\
\
"value": "7762811692-12345"\
\
},\
\
"authorIdentifier": {"type": "Pesel",\
\
"value": "15062788702"\
\
},\
\
"permissionScope": "CredentialsManage",\
\
"description": "Opis uprawnienia",\
\
"startDate": "2025-06-22T10:41:11+00:00"\
\
}\
\
],

"hasMore": false

}`

## [tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1entities~1roles/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1entities~1roles/get) Pobranie listy ról podmiotu

Metoda pozwala na **odczytanie listy ról podmiotu bieżącego kontekstu logowania**.

#### Role podmiotów zwracane przez operację:

- **CourtBailiff** – komornik sądowy
- **EnforcementAuthority** – organ egzekucyjny
- **LocalGovernmentUnit** – nadrzędna JST
- **LocalGovernmentSubUnit** – podrzędne JST
- **VatGroupUnit** – grupa VAT
- **VatGroupSubUnit** – członek grupy VAT

#### Stronicowanie wyników

Zapytanie zwraca **jedną stronę wyników** o numerze i rozmiarze podanym w ścieżce.

- Przy pierwszym wywołaniu należy ustawić parametr `pageOffset = 0`.
- Jeżeli dostępna jest kolejna strona wyników, w odpowiedzi pojawi się flaga **`hasMore`**.
- W takim przypadku można wywołać zapytanie ponownie z kolejnym numerem strony.

> Więcej informacji:
>
> - [Pobieranie listy ról](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#pobranie-listy-r%C3%B3l-podmiotu)

**Sortowanie:**

- startDate (Desc)

**Wymagane uprawnienia**: `CredentialsManage`, `CredentialsRead`.

##### Authorizations:

_Bearer_

##### query Parameters

|     |     |
| --- | --- |
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Numer strony wyników. |
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| roles<br>required | Array of objects (EntityRole) <br>Lista odczytanych ról podmiotu. |
| hasMore<br>required | boolean<br>Flaga informująca o dostępności kolejnej strony wyników. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

get/api/v2/permissions/query/entities/roles

https://ksef-test.mf.gov.pl/api/v2/permissions/query/entities/roles

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"roles": [{"role": "EnforcementAuthority",\
\
"description": "Organ egzekucyjny",\
\
"startDate": "2025-06-22T10:41:11+00:00"\
\
}\
\
],

"hasMore": false

}`

## [tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1subordinate-entities~1roles/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1subordinate-entities~1roles/post) Pobranie listy podmiotów podrzędnych

Metoda pozwala na odczytanie listy podmiotów podrzędnych,

jeżeli podmiot bieżącego kontekstu ma rolę podmiotu nadrzędnego:

- **nadrzędna JST** – odczytywane są podrzędne JST,
- **grupa VAT** – odczytywane są podmioty będące członkami grupy VAT.

Role podmiotów zwracane przez operację obejmują:

- **LocalGovernmentSubUnit** – podrzędne JST,
- **VatGroupSubUnit** – członek grupy VAT.

Odpowiedź może być filtrowana według parametru:

- **subordinateEntityIdentifier** – identyfikator podmiotu podrzędnego.

#### Stronicowanie wyników

Zapytanie zwraca **jedną stronę wyników** o numerze i rozmiarze podanym w ścieżce.

- Przy pierwszym wywołaniu należy ustawić parametr `pageOffset = 0`.
- Jeżeli dostępna jest kolejna strona wyników, w odpowiedzi pojawi się flaga **`hasMore`**.
- W takim przypadku można wywołać zapytanie ponownie z kolejnym numerem strony.

> Więcej informacji:
>
> - [Pobieranie listy podmiotów podrzędnych](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#pobranie-listy-podmiot%C3%B3w-podrz%C4%99dnych)

**Sortowanie:**

- startDate (Desc)

**Wymagane uprawnienia**: `CredentialsManage`, `CredentialsRead`, `SubunitManage`.

##### Authorizations:

_Bearer_

##### query Parameters

|     |     |
| --- | --- |
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Numer strony wyników. |
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### Request Body schema: application/json

| subordinateEntityIdentifier | object or null

Identyfikator podmiotu podrzędnego.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP | |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| roles<br>required | Array of objects (SubordinateEntityRole) <br>Lista odczytanych podmiotów podrzędnych i ich ról. |
| hasMore<br>required | boolean<br>Flaga informująca o dostępności kolejnej strony wyników. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/query/subordinate-entities/roles

https://ksef-test.mf.gov.pl/api/v2/permissions/query/subordinate-entities/roles

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"subordinateEntityIdentifier": {"type": "Nip",

"value": "7762811692"

}

}`

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"roles": [{"subordinateEntityIdentifier": {"type": "Nip",\
\
"value": "7762811692"\
\
},\
\
"role": "VatGroupSubUnit",\
\
"description": "Członek grupy VAT 8373740478",\
\
"startDate": "2025-06-22T10:41:11+00:00"\
\
}\
\
],

"hasMore": false

}`

## [tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1authorizations~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1authorizations~1grants/post) Pobranie listy uprawnień podmiotowych do obsługi faktur

Metoda pozwala na odczytanie uprawnień podmiotowych:

- otrzymanych przez podmiot bieżącego kontekstu
- nadanych przez podmiot bieżącego kontekstu

Wybór listy nadanych lub otrzymanych uprawnień odbywa się przy użyciu parametru **queryType**.

Uprawnienia zwracane przez operację obejmują:

- **SelfInvoicing** – wystawianie faktur w trybie samofakturowania
- **TaxRepresentative** – wykonywanie operacji przedstawiciela podatkowego
- **RRInvoicing** – wystawianie faktur VAT RR
- **PefInvoicing** – wystawianie faktur PEF

Odpowiedź może być filtrowana na podstawie następujących parametrów:

- **authorizingIdentifier** – identyfikator podmiotu uprawniającego (stosowane przy queryType = Received)
- **authorizedIdentifier** – identyfikator podmiotu uprawnionego (stosowane przy queryType = Granted)
- **permissionTypes** – lista rodzajów wyszukiwanych uprawnień

#### Stronicowanie wyników

Zapytanie zwraca **jedną stronę wyników** o numerze i rozmiarze podanym w ścieżce.

- Przy pierwszym wywołaniu należy ustawić parametr `pageOffset = 0`.
- Jeżeli dostępna jest kolejna strona wyników, w odpowiedzi pojawi się flaga **`hasMore`**.
- W takim przypadku można wywołać zapytanie ponownie z kolejnym numerem strony.

> Więcej informacji:
>
> - [Pobieranie listy uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#pobranie-listy-uprawnie%C5%84-podmiotowych-do-obs%C5%82ugi-faktur)

**Sortowanie:**

- startDate (Desc)

**Wymagane uprawnienia**: `CredentialsManage`, `CredentialsRead`, `PefInvoiceWrite`.

##### Authorizations:

_Bearer_

##### query Parameters

|     |     |
| --- | --- |
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Numer strony wyników. |
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### Request Body schema: application/json

| authorizingIdentifier | object or null

Identyfikator podmiotu uprawniającego.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP | |
| authorizedIdentifier | object or null

Identyfikator podmiotu uprawnionego.

| Type | Value |
| --- | --- |
| Nip | 10 cyfrowy numer NIP |
| PeppolId | Identyfikator dostawcy usług Peppol | |
| queryType<br>required | string

Enum:"Granted""Received"

Typ zapytania.

| Type | Value |
| --- | --- |
| Granted | Uprawnienia nadane innym podmiotom |
| Received | Uprawnienia otrzymane od innych podmiotów | |
| permissionTypes | Array of strings or null (InvoicePermissionType) <br>Enum:"SelfInvoicing""TaxRepresentative""RRInvoicing""PefInvoicing"<br>Lista rodzajów wyszukiwanych uprawnień. |

### Responses

**200**

OK

##### Response Schema: application/json

|     |     |
| --- | --- |
| authorizationGrants<br>required | Array of objects (EntityAuthorizationGrant) <br>Lista odczytanych uprawnień. |
| hasMore<br>required | boolean<br>Flaga informująca o dostępności kolejnej strony wyników. |

**400**

Bad Request

**401**

Unauthorized

**403**

Forbidden

**429**

Too Many Requests

|  | req / s | req / min | req / h | grupa |
| --- | --- | --- | --- | --- |
| **Limity liczby żądań** | 100 | 300 | 1200 | other |

post/api/v2/permissions/query/authorizations/grants

https://ksef-test.mf.gov.pl/api/v2/permissions/query/authorizations/grants

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"authorizedIdentifier": {"type": "Nip",

"value": "7762811692"

},

"queryType": "Granted",

"permissionTypes": ["SelfInvoicing",\
\
"TaxRepresentative",\
\
"RRInvoicing"\
\
]

}`

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`{"authorizationGrants": [{"id": "0c9a72e8-f344-457f-9c16-7c640eb60242",\
\
"authorIdentifier": {"type": "Pesel",\
\
"value": "15062788702"\
\
},\
\
"authorizedEntityIdentifier": {"type": "Nip",\
\
"value": "7762811692"\
\
},\
\
"authorizingEntityIdentifier": {"type": "Nip",\
\
"value": "1134256681"\
\
},\
\
"authorizationScope": "SelfInvoicing",\
\
"description": "Uprawnienie podmiotowe do samofakturowania",\
\
"startDate": "2025-06-22T10:41:11+00:00"\
\
}\
\
],

"hasMore": false

}`

## [tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1eu-entities~1grants/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Wyszukiwanie-nadanych-uprawnien/paths/~1api~1v2~1permissions~1query~1eu-entities~1grants/post) Pobranie listy uprawnień administratorów lub reprezentantów podmiotów unijnych uprawnionych do samofakturowania

Metoda pozwala na odczytanie uprawnień administratorów lub reprezentantów podmiotów unijnych:

- Jeżeli kontekstem logowania jest NIP, możliwe jest odczytanie uprawnień administratorów podmiotów unijnych powiązanych z podmiotem bieżącego kontekstu, czyli takich, dla których pierwszy człon kontekstu złożonego jest równy NIP-owi kontekstu logowania.
- Jeżeli kontekst logowania jest złożony (NIP-VAT UE), możliwe jest pobranie wszystkich uprawnień administratorów i reprezentantów podmiotu w bieżącym kontekście złożonym.

Uprawnienia zwracane przez operację obejmują:

- **VatUeManage** – zarządzanie uprawnieniami w ramach podmiotu unijnego
- **InvoiceWrite** – wystawianie faktur
- **InvoiceRead** – przeglądanie faktur
- **Introspection** – przeglądanie historii sesji

Odpowiedź może być filtrowana na podstawie następujących parametrów:

- **vatUeIdentifier** – identyfikator podmiotu unijnego
- **authorizedFingerprintIdentifier** – odcisk palca certyfikatu uprawnionej osoby lub podmiotu
- **permissionTypes** – lista rodzajów wyszukiwanych uprawnień

#### Stronicowanie wyników

Zapytanie zwraca **jedną stronę wyników** o numerze i rozmiarze podanym w ścieżce.

- Przy pierwszym wywołaniu należy ustawić parametr `pageOffset = 0`.
- Jeżeli dostępna jest kolejna strona wyników, w odpowiedzi pojawi się flaga **`hasMore`**.
- W takim przypadku można wywołać zapytanie ponownie z kolejnym numerem strony.

> Więcej informacji:
>
> - [Pobieranie listy uprawnień](https://github.com/CIRFMF/ksef-docs/blob/main/uprawnienia.md#pobranie-listy-uprawnie%C5%84-administrator%C3%B3w-lub-reprezentant%C3%B3w-podmiot%C3%B3w-unijnych-uprawnionych-do-samofakturowania)

**Sortowanie:**

- startDate (Desc)

**Wymagane uprawnienia**: `CredentialsManage`, `CredentialsRead`, `VatUeManage`.

##### Authorizations:

_Bearer_

##### query Parameters

|     |     |
| --- | --- |
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Numer strony wyników. |
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| vatUeIdentifier | string or null^(ATU\\d{8}\|BE\[01\]{1}\\d{9}\|BG\\d{9,10}\|CY\\d{8}\[...Show pattern<br>Wartość identyfikatora (numeru identyfikacyjnego VAT) podmiotu unijnego. |\
| authorizedFingerprintIdentifier | string or null^\[0-9A-F\]{64}$<br>Odcisk palca certyfikatu kwalifikowanego uprawnionego. |\
| permissionTypes | Array of strings or null (EuEntityPermissionsQueryPermissionType) <br>Enum:"VatUeManage""InvoiceWrite""InvoiceRead""Introspection"<br>Lista rodzajów wyszukiwanych uprawnień. |\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| permissions<br>required | Array of objects (EuEntityPermission) <br>Lista odczytanych uprawnień. |\
| hasMore<br>required | boolean<br>Flaga informująca o dostępności kolejnej strony wyników. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**403**\
\
Forbidden\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
post/api/v2/permissions/query/eu-entities/grants\
\
https://ksef-test.mf.gov.pl/api/v2/permissions/query/eu-entities/grants\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"vatUeIdentifier": "DE123456789012",\
\
"permissionTypes": ["VatUeManage",\
\
"Introspection"\
\
]\
\
}`\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"permissions": [{"id": "0c9a72e8-f344-457f-9c16-7c640eb60242",\
\
"authorIdentifier": {"type": "Pesel",\
\
"value": "15062788702"\
\
},\
\
"vatUeIdentifier": "DE123456789012",\
\
"euEntityName": "Podmiot unijny",\
\
"authorizedFingerprintIdentifier": "CEB3643BAC2C111ADDE971BDA5A80163441867D65389FC0BC0DFF8B4C1CD4E59",\
\
"permissionScope": "VatUeManage",\
\
"description": "Opis uprawnienia",\
\
"startDate": "2025-06-22T10:41:11+00:00"\
\
}\
\
],\
\
"hasMore": false\
\
}`\
\
## [tag/Operacje](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Operacje) Operacje\
\
## [tag/Operacje/paths/~1api~1v2~1permissions~1operations~1{referenceNumber}/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Operacje/paths/~1api~1v2~1permissions~1operations~1{referenceNumber}/get) Pobranie statusu operacji\
\
Zwraca status operacji asynchronicznej związanej z nadaniem lub odebraniem uprawnień.\
\
##### Authorizations:\
\
_Bearer_\
\
##### path Parameters\
\
|     |     |\
| --- | --- |\
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny operacji nadania lub odbierania uprawnień. |\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
| status<br>required | object\
\
Informacje o aktualnym statusie.\
\
| Code | Description | Details |\
| --- | --- | --- |\
| 100 | Operacja przyjęta do realizacji | - |\
| 200 | Operacja zakończona sukcesem | - |\
| 400 | Operacja zakończona niepowodzeniem | - |\
| 410 | Podane identyfikatory są niezgodne lub pozostają w niewłaściwej relacji | - |\
| 420 | Użyte poświadczenia nie mają uprawnień do wykonania tej operacji | - |\
| 430 | Kontekst identyfikatora nie odpowiada wymaganej roli lub uprawnieniom | - |\
| 440 | Operacja niedozwolona dla wskazanych powiązań identyfikatorów | - |\
| 450 | Operacja niedozwolona dla wskazanego identyfikatora lub jego typu | - |\
| 500 | Nieznany błąd | - |\
| 550 | Operacja została anulowana przez system | Przetwarzanie zostało przerwane z przyczyn wewnętrznych systemu. Spróbuj ponownie później. | |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
get/api/v2/permissions/operations/{referenceNumber}\
\
https://ksef-test.mf.gov.pl/api/v2/permissions/operations/{referenceNumber}\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"status": {"code": 200,\
\
"description": "Operacja zakończona sukcesem"\
\
}\
\
}`\
\
## [tag/Operacje/paths/~1api~1v2~1permissions~1attachments~1status/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Operacje/paths/~1api~1v2~1permissions~1attachments~1status/get) Sprawdzenie statusu zgody na wystawianie faktur z załącznikiem\
\
Sprawdzenie czy obecny kontekst posiada zgodę na wystawianie faktur z załącznikiem.\
\
**Wymagane uprawnienia**: `CredentialsManage`, `CredentialsRead`.\
\
##### Authorizations:\
\
_Bearer_\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| isAttachmentAllowed | boolean<br>Informacja czy Podmiot ma obecnie możliwość dodawania Załączników do Faktur |\
| revokedDate | string or null <date-time> <br>Data i czas zakończenia możliwość dodawania przez Podmiot Załączników do Faktur.<br>Brak podanej daty oznacza bezterminową możliwość dodawania Załączników do Faktur |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**403**\
\
Forbidden\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
get/api/v2/permissions/attachments/status\
\
https://ksef-test.mf.gov.pl/api/v2/permissions/attachments/status\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
\
`{"isAttachmentAllowed": true,\
\
"revokedDate": "2019-08-24T14:15:22Z"\
\
}`\
\
## [tag/Certyfikaty](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty) Certyfikaty\
\
Certyfikat KSeF to cyfrowe poświadczenie tożsamości podmiotu, wydawane przez system KSeF na wniosek uwierzytelnionego podmiotu.\
Certyfikat ten może być wykorzystywany do:\
\
- uwierzytelniania się w systemie KSeF,\
- realizacji operacji w trybie offline, w tym wystawiania faktur bezpośrednio w aplikacji użytkownika.\
\
**Uwaga**: Wnioskowanie o certyfikat KSeF jest możliwe wyłącznie po uwierzytelnieniu z wykorzystaniem podpisu (XAdES). Uwierzytelnienie przy użyciu tokenu systemowego KSeF nie pozwala na złożenie wniosku.\
\
## [tag/Certyfikaty/paths/~1api~1v2~1certificates~1limits/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty/paths/~1api~1v2~1certificates~1limits/get) Pobranie danych o limitach certyfikatów\
\
Zwraca informacje o limitach certyfikatów oraz informacje czy użytkownik może zawnioskować o certyfikat KSeF.\
\
##### Authorizations:\
\
_Bearer_\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| canRequest<br>required | boolean<br>Flaga informująca czy uwierzytelniony podmiot może złożyć nowy wniosek o certyfikat. |\
| enrollment<br>required | object<br>Informacje o limitach związanych z liczbą możliwych do złożenia wniosków certyfikacyjnych. |\
| certificate<br>required | object<br>Informacje o limitach dotyczących liczby aktywnych certyfikatów wydanych dla danego podmiotu. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
get/api/v2/certificates/limits\
\
https://ksef-test.mf.gov.pl/api/v2/certificates/limits\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"canRequest": true,\
\
"enrollment": {"remaining": 0,\
\
"limit": 0\
\
},\
\
"certificate": {"remaining": 0,\
\
"limit": 0\
\
}\
\
}`\
\
## [tag/Certyfikaty/paths/~1api~1v2~1certificates~1enrollments~1data/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty/paths/~1api~1v2~1certificates~1enrollments~1data/get) Pobranie danych do wniosku certyfikacyjnego\
\
Zwraca dane wymagane do przygotowania wniosku certyfikacyjnego PKCS#10.\
\
Dane te są zwracane na podstawie certyfikatu użytego w procesie uwierzytelnienia i identyfikują podmiot, który składa wniosek o certyfikat.\
\
> Więcej informacji:\
>\
> - [Pobranie danych do wniosku certyfikacyjnego](https://github.com/CIRFMF/ksef-docs/blob/main/certyfikaty-KSeF.md#2-pobranie-danych-do-wniosku-certyfikacyjnego)\
> - [Przygotowanie wniosku](https://github.com/CIRFMF/ksef-docs/blob/main/certyfikaty-KSeF.md#3-przygotowanie-csr-certificate-signing-request)\
\
##### Authorizations:\
\
_Bearer_\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| commonName<br>required | string<br>Nazwa powszechna. |\
| countryName<br>required | string<br>Kraj, kod ISO 3166. |\
| givenName | string or null<br>Imię. |\
| surname | string or null<br>Nazwisko. |\
| serialNumber | string or null<br>Numer seryjny podmiotu. |\
| uniqueIdentifier | string or null<br>Unikalny identyfikator. |\
| organizationName | string or null<br>Nazwa organizacji. |\
| organizationIdentifier | string or null<br>Identyfikator organizacji. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
get/api/v2/certificates/enrollments/data\
\
https://ksef-test.mf.gov.pl/api/v2/certificates/enrollments/data\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
\
`{"commonName": "Firma Kowalski Certyfikat",\
\
"countryName": "PL",\
\
"serialNumber": "ABC123456789",\
\
"uniqueIdentifier": "d9d22724-4696-460c-9e5e-b9e3aafb0af3",\
\
"organizationName": "Firma Kowalski Sp. z o.o.",\
\
"organizationIdentifier": "7762811692"\
\
}`\
\
## [tag/Certyfikaty/paths/~1api~1v2~1certificates~1enrollments/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty/paths/~1api~1v2~1certificates~1enrollments/post) Wysyłka wniosku certyfikacyjnego\
\
Przyjmuje wniosek certyfikacyjny i rozpoczyna jego przetwarzanie.\
\
Dozwolone typy kluczy prywatnych:\
\
- RSA (OID: 1.2.840.113549.1.1.1), długość klucza równa 2048 bitów,\
- EC (klucze oparte na krzywych eliptycznych, OID: 1.2.840.10045.2.1), krzywa NIST P-256 (secp256r1)\
\
Zalecane jest stosowanie kluczy EC.\
\
Dozwolone algorytmy podpisu:\
\
- RSA PKCS#1 v1.5,\
- RSA PSS,\
- ECDSA (format podpisu zgodny z RFC 3279)\
\
Dozwolone funkcje skrótu użyte do podpisu CSR:\
\
- SHA1,\
- SHA256,\
- SHA384,\
- SHA512\
\
> Więcej informacji:\
>\
> - [Wysłanie wniosku certyfikacyjnego](https://github.com/CIRFMF/ksef-docs/blob/main/certyfikaty-KSeF.md#4-wys%C5%82anie-wniosku-certyfikacyjnego)\
\
##### Authorizations:\
\
_Bearer_\
\
##### Request Body schema: application/json\
\
| certificateName<br>required | string \[ 5 .. 100 \] characters ^\[a-zA-Z0-9\_\\-\ ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\]+$<br>Nazwa własna certyfikatu. |\
| certificateType<br>required | string\
\
Enum:"Authentication""Offline"\
\
Typ certyfikatu.\
\
| Wartość | Opis |\
| --- | --- |\
| Authentication | Certyfikat używany do uwierzytelnienia w systemie. |\
| Offline | Certyfikat używany wyłącznie do potwierdzania autentyczności wystawcy i integralności faktury w trybie offline | |\
| csr<br>required | string <byte> <br>Wniosek certyfikacyjny PKCS#10 (CSR) w formacie DER zakodowany w Base64. |\
| validFrom | string or null <date-time> <br>Data rozpoczęcia ważności certyfikatu.<br>Jeśli nie zostanie podana, certyfikat będzie ważny od momentu jego wystawienia. |\
\
### Responses\
\
**202**\
\
Accepted\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny wniosku certyfikacyjnego. |\
| timestamp<br>required | string <date-time> <br>Data złożenia wniosku certyfikacyjnego. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
post/api/v2/certificates/enrollments\
\
https://ksef-test.mf.gov.pl/api/v2/certificates/enrollments\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
\
`{"certificateName": "Certyfikat-Auth-004",\
\
"certificateType": "Authentication",\
\
"csr": "MIIDJjCCAd4CAQAwgbAxIjAgBgNVBAMMGUZpcm1hIEtvd2Fsc2tpIENlcnR5ZmlrYXQxIjAgBgNVBAoMGUZpcm1hIEtvd2Fsc2tpIFNwLiB6IG8uby4xEzARBgNVBGEMCjc3NjI4MTE2OTIxCzAJBgNVBAYTAlBMMRUwEwYDVQQFEwxBQkMxMjM0NTY3ODkxLTArBgNVBC0MJGQ5ZDIyNzI0LTQ2OTYtNDYwYy05ZTVlLWI5ZTNhYWZiMGFmMzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANZC1hJiB4ZBsxGy/a4yvtOUP0HQxDt7EUZrfKO78+cmI7KCO9aW96yr6O0R928/Y9vmymbgh6KvMUTzZZj24uyxar849O1laor5t8Wv63RDx/I4+9Rt7w+QPPofmpenOokJH+Fm+FDQwo2l07o8SppGfaZpvMak+cDSrh+73wfM37fvPImr9p4ckzzxA9q6f4uoqGqcGSDlSwRjfLQKzWZaEklpZBpY4jeCh54uN3+YLsMQYKdcIbW0Jart1UbwMd/wbHfzFhVmPGOAMMpwVEBw6E4A0CTWIiAX3Alqbx4+IkuqC+gEs3ETTec7eOqhxe9V9cywi7WR+Mz6JO6DJcUCAwEAAaAAMD0GCSqGSIb3DQEBCjAwoA0wCwYJYIZIAWUDBAIBoRowGAYJKoZIhvcNAQEIMAsGCWCGSAFlAwQCAaIDAgEgA4IBAQCJhtF2/2E+JmkWitE/BGbm3NU4fIxr1Z+w0UnHsP+F8n9UDwAnuncG1GH5wZFervldEMooegzEDnYaqxnEUnbZ4wxeAHqpbTZjOOfqrk7o0r66+mXUs5NnyD4M3j3ig98GcvhEdbcNH+RsIwi7FaLNXnOE4SLYL9KvW0geriywWjS+5MmA0Gcn1e4vCD6FeEls8EHzkhrWE+rUsoM5zT2a0OPNXG3fScyOqOZe+OdjT4Y7ScRGy711u3v2X9RoTqQUDfCJ3cob/KRcrzvs1TQVazGZPfcIa6an6SigUvZ7XAMHlUTyOeM4AwKqiEqQ0qfe/HhlDylgZSwulb9u0utT",\
\
"validFrom": "2025-08-28T09:22:13.388+00:00"\
\
}`\
\
### Response samples\
\
- 202\
- 400\
\
Content type\
\
application/json\
\
Copy\
\
`{"referenceNumber": "20251010-EH-1B6C9EB000-4B15D3AEB9-89",\
\
"timestamp": "2025-10-11T12:23:56.0154302+00:00"\
\
}`\
\
## [tag/Certyfikaty/paths/~1api~1v2~1certificates~1enrollments~1{referenceNumber}/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty/paths/~1api~1v2~1certificates~1enrollments~1{referenceNumber}/get) Pobranie statusu przetwarzania wniosku certyfikacyjnego\
\
Zwraca informacje o statusie wniosku certyfikacyjnego.\
\
##### Authorizations:\
\
_Bearer_\
\
##### path Parameters\
\
|     |     |\
| --- | --- |\
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny wniosku certyfikacyjnego |\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
| requestDate<br>required | string <date-time> <br>Data złożenia wniosku certyfikacyjnego. |\
| status<br>required | object\
\
Informacje o aktualnym statusie.\
\
| Code | Description | Details |\
| --- | --- | --- |\
| 100 | Wniosek przyjęty do realizacji | - |\
| 200 | Wniosek obsłużony (certyfikat wygenerowany) | - |\
| 400 | Wniosek odrzucony | Klucz publiczny został już certyfikowany przez inny podmiot. |\
| 400 | Wniosek odrzucony | Osiągnięto dopuszczalny limit posiadanych certyfikatów. |\
| 500 | Nieznany błąd | - |\
| 550 | Operacja została anulowana przez system | Przetwarzanie zostało przerwane z przyczyn wewnętrznych systemu. Spróbuj ponownie | |\
| certificateSerialNumber | string or null<br>Numer seryjny wygenerowanego certyfikatu (w formacie szesnastkowym). <br>Zwracany w przypadku prawidłowego przeprocesowania wniosku certyfikacyjnego. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
get/api/v2/certificates/enrollments/{referenceNumber}\
\
https://ksef-test.mf.gov.pl/api/v2/certificates/enrollments/{referenceNumber}\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"requestDate": "2025-10-11T12:23:56.0154302+00:00",\
\
"status": {"code": 100,\
\
"description": "Wniosek przyjęty do realizacji"\
\
}\
\
}`\
\
## [tag/Certyfikaty/paths/~1api~1v2~1certificates~1retrieve/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty/paths/~1api~1v2~1certificates~1retrieve/post) Pobranie certyfikatu lub listy certyfikatów\
\
Zwraca certyfikaty o podanych numerach seryjnych w formacie DER zakodowanym w Base64.\
\
##### Authorizations:\
\
_Bearer_\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| certificateSerialNumbers<br>required | Array of strings \[ 1 .. 10 \] items <br>Numery seryjne certyfikatów do pobrania. |\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| certificates<br>required | Array of objects (RetrieveCertificatesListItem) <br>Pobrane certyfikaty. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
post/api/v2/certificates/retrieve\
\
https://ksef-test.mf.gov.pl/api/v2/certificates/retrieve\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"certificateSerialNumbers": ["0321C82DA41B4362",\
\
"0321F21DA462A362"\
\
]\
\
}`\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"certificates": [{"certificate": "AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==",\
\
"certificateName": "Cert 00023",\
\
"certificateSerialNumber": "0321C82DA41B4362",\
\
"certificateType": "Authentication"\
\
}\
\
]\
\
}`\
\
## [tag/Certyfikaty/paths/~1api~1v2~1certificates~1{certificateSerialNumber}~1revoke/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty/paths/~1api~1v2~1certificates~1{certificateSerialNumber}~1revoke/post) Unieważnienie certyfikatu\
\
Unieważnia certyfikat o podanym numerze seryjnym.\
\
##### Authorizations:\
\
_Bearer_\
\
##### path Parameters\
\
|     |     |\
| --- | --- |\
| certificateSerialNumber<br>required | string<br>Numer seryjny certyfikatu (w formacie szesnastkowym). |\
\
##### Request Body schema: application/json\
\
| revocationReason | string or null\
\
Enum:"Unspecified""Superseded""KeyCompromise"\
\
Powód unieważnienia certyfikatu.\
\
| Wartość | Opis |\
| --- | --- |\
| Unspecified | Nieokreślony. |\
| Superseded | Certyfikat został zastąpiony przez inny. |\
| KeyCompromise | Klucz prywatny powiązany z certyfikatem został skompromitowany. | |\
\
### Responses\
\
**204**\
\
No Content\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
post/api/v2/certificates/{certificateSerialNumber}/revoke\
\
https://ksef-test.mf.gov.pl/api/v2/certificates/{certificateSerialNumber}/revoke\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
\
`{"revocationReason": "Unspecified"\
\
}`\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`\
\
## [tag/Certyfikaty/paths/~1api~1v2~1certificates~1query/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Certyfikaty/paths/~1api~1v2~1certificates~1query/post) Pobranie listy metadanych certyfikatów\
\
Zwraca listę certyfikatów spełniających podane kryteria wyszukiwania.\
W przypadku braku podania kryteriów wyszukiwania zwrócona zostanie nieprzefiltrowana lista.\
\
**Sortowanie:**\
\
- requestDate (Desc)\
\
##### Authorizations:\
\
_Bearer_\
\
##### query Parameters\
\
|     |     |\
| --- | --- |\
| pageSize | integer <int32>  \[ 10 .. 50 \] <br>Default: 10<br>Rozmiar strony wyników |\
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Numer strony wyników |\
\
##### Request Body schema: application/json\
\
Kryteria filtrowania\
\
| certificateSerialNumber | string or null<br>Numer seryjny certyfikatu. Wyszukiwanie odbywa się na zasadzie dokładnego dopasowania (exact match). |\
| name | string or null<br>Nazwa własna certyfikatu. Wyszukiwanie jest częściowe, czyli zwracane są certyfikaty, których nazwa zawiera podany ciąg znaków (contains). |\
| type | string or null\
\
Enum:"Authentication""Offline"\
\
Typ certyfikatu KSeF.\
\
| Wartość | Opis |\
| --- | --- |\
| Authentication | Certyfikat używany do uwierzytelnienia w systemie. |\
| Offline | Certyfikat używany wyłącznie do potwierdzania autentyczności wystawcy i integralności faktury w trybie offline | |\
| status | string or null\
\
Enum:"Active""Blocked""Revoked""Expired"\
\
Status certyfikatu.\
\
| Wartość | Opis |\
| --- | --- |\
| Active | Certyfikat jest aktywny i może zostać użyty do uwierzytelnienia lub realizacji operacji w trybie offline (w zależności od typu certyfikatu). |\
| Blocked | Certyfikat został zablokowany i nie może zostać użyty do uwierzytelnienia i realizacji operacji w trybie offline. Status przejściowy do czasu zakończenia procesu unieważniania. |\
| Revoked | Certyfikat został unieważniony i nie może zostać użyty do uwierzytelnienia i realizacji operacji w trybie offline. |\
| Expired | Certyfikat wygasł i nie może zostać użyty do uwierzytelnienia i realizacji operacji w trybie offline. | |\
| expiresAfter | string or null <date-time> <br>Filtruje certyfikaty, które wygasają po podanej dacie. |\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| certificates<br>required | Array of objects (CertificateListItem) <br>Lista certyfikatów spełniających kryteria wyszukiwania. |\
| hasMore<br>required | boolean<br>Flaga informująca o dostępności kolejnej strony wyników. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
post/api/v2/certificates/query\
\
https://ksef-test.mf.gov.pl/api/v2/certificates/query\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
\
`{"type": "Offline",\
\
"status": "Active"\
\
}`\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"certificates": [{"certificateSerialNumber": "018209160C631F1E",\
\
"name": "Certyfikat 1",\
\
"type": "Authentication",\
\
"commonName": "Jan Kowalski",\
\
"status": "Active",\
\
"subjectIdentifier": {"type": "Nip",\
\
"value": "1234445678"\
\
},\
\
"validFrom": "2025-08-24T14:15:22+00:00",\
\
"validTo": "2027-08-24T14:15:22+00:00",\
\
"lastUseDate": "2025-08-25T14:15:22+00:00",\
\
"requestDate": "2025-08-24T14:15:22+00:00"\
\
}\
\
],\
\
"hasMore": false\
\
}`\
\
## [tag/Tokeny-KSeF](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Tokeny-KSeF) Tokeny KSeF\
\
Token KSeF to unikalny, generowany identyfikator uwierzytelniający, który — na równi z [kwalifikowanym podpisem elektronicznym](https://github.com/CIRFMF/ksef-docs/blob/main/uwierzytelnianie.md#21-uwierzytelnianie-kwalifikowanym-podpisem-elektronicznym) — umożliwia [uwierzytelnienie](https://github.com/CIRFMF/ksef-docs/blob/main/uwierzytelnianie.md#22-uwierzytelnianie-tokenem-ksef) się do API KSeF.\
\
Token KSeF jest wydawany z niezmiennym zestawem uprawnień określonych przy jego tworzeniu; każda modyfikacja tych uprawnień wymaga wygenerowania nowego tokena.\
\
> **Uwaga!**\
>\
> Token KSeF pełni rolę **poufnego sekretu** uwierzytelniającego — należy przechowywać go wyłącznie w zaufanym i bezpiecznym magazynie.\
\
Więcej informacji:\
\
- [Token KSeF](https://github.com/CIRFMF/ksef-docs/blob/main/tokeny-ksef.md)\
\
## [tag/Tokeny-KSeF/paths/~1api~1v2~1tokens/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Tokeny-KSeF/paths/~1api~1v2~1tokens/post) Wygenerowanie nowego tokena\
\
Zwraca token, który może być użyty do uwierzytelniania się w KSeF.\
\
Token może być generowany tylko w kontekście NIP lub identyfikatora wewnętrznego. Jest zwracany tylko raz. Zaczyna być aktywny w momencie gdy jego status zmieni się na `Active`.\
\
##### Authorizations:\
\
_Bearer_\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| permissions<br>required | Array of strings (TokenPermissionType) <br>Items Enum:"InvoiceRead""InvoiceWrite""CredentialsRead""CredentialsManage""SubunitManage""EnforcementOperations"<br>Uprawnienia przypisane tokenowi. |\
| description<br>required | string \[ 5 .. 256 \] characters <br>Opis tokena. |\
\
### Responses\
\
**202**\
\
Accepted\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny tokena KSeF. |\
| token<br>required | string <= 160 characters <br>Token KSeF. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
post/api/v2/tokens\
\
https://ksef-test.mf.gov.pl/api/v2/tokens\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"permissions": ["InvoiceRead",\
\
"InvoiceWrite"\
\
],\
\
"description": "Wystawianie i przeglądanie faktur."\
\
}`\
\
### Response samples\
\
- 202\
- 400\
\
Content type\
\
application/json\
\
Copy\
\
`{"referenceNumber": "20251010-EC-1DCE3E3000-12ECB5B36E-45",\
\
"token": "20251010-EC-1DCE3E3000-12ECB5B36E-45|internalId-5265877635-12345|919f704466624ce29cd5ac7b65ded5e7cccc112eee314f2aaa76e02cd16df7b9"\
\
}`\
\
## [tag/Tokeny-KSeF/paths/~1api~1v2~1tokens/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Tokeny-KSeF/paths/~1api~1v2~1tokens/get) Pobranie listy wygenerowanych tokenów\
\
**Sortowanie:**\
\
- dateCreated (Desc)\
\
##### Authorizations:\
\
_Bearer_\
\
##### query Parameters\
\
| status | Array of strings (AuthenticationTokenStatus)\
\
Items Enum:"Pending""Active""Revoking""Revoked""Failed"\
\
Status tokenów do zwrócenia. W przypadku braku parametru zwracane są wszystkie tokeny. Parametr można przekazać wielokrotnie.\
\
| Wartość | Opis |\
| --- | --- |\
| Pending | Token został utworzony ale jest jeszcze w trakcie aktywacji i nadawania uprawnień. Nie może być jeszcze wykorzystywany do uwierzytelniania. |\
| Active | Token jest aktywny i może być wykorzystywany do uwierzytelniania. |\
| Revoking | Token jest w trakcie unieważniania. Nie może już być wykorzystywany do uwierzytelniania. |\
| Revoked | Token został unieważniony i nie może być wykorzystywany do uwierzytelniania. |\
| Failed | Nie udało się aktywować tokena. Należy wygenerować nowy token, obecny nie może być wykorzystywany do uwierzytelniania. | |\
| description | string >= 3 characters <br>Umożliwia filtrowanie tokenów po opisie. Wartość parametru jest wyszukiwana w opisie tokena (operacja nie rozróżnia wielkości liter). Należy podać co najmniej 3 znaki. |\
| authorIdentifier | string >= 3 characters <br>Umożliwia filtrowanie tokenów po ich twórcy. Wartość parametru jest wyszukiwana w identyfikatorze (operacja nie rozróżnia wielkości liter). Należy podać co najmniej 3 znaki. |\
| authorIdentifierType | string\
\
Enum:"Nip""Pesel""Fingerprint"\
\
Umożliwia filtrowanie tokenów po ich twórcy. Wartość parametru określa typ identyfikatora w którym będzie wyszukiwany ciąg znaków przekazany w parametrze `authorIdentifier`.\
\
| Wartość | Opis |\
| --- | --- |\
| Nip | NIP. |\
| Pesel | PESEL. |\
| Fingerprint | Odcisk palca certyfikatu. | |\
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |\
\
##### header Parameters\
\
|     |     |\
| --- | --- |\
| x-continuation-token | string<br>Token służący do pobrania kolejnej strony wyników. |\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| continuationToken | string or null<br>Token służący do pobrania kolejnej strony wyników. Jeśli jest pusty, to nie ma kolejnych stron. |\
| tokens<br>required | Array of objects (QueryTokensResponseItem) <br>Lista tokenów uwierzytelniających. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
get/api/v2/tokens\
\
https://ksef-test.mf.gov.pl/api/v2/tokens\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"continuationToken": "W3sidG9rZW4iOiIrUklEOn4zeHd0QUlqZUc5VkhCQUFBQUFBQUJBPT0jUlQ6MSNUUkM6MTAjSVNWOjIjSUVPOjY1NTY3I1FDRjo4I0ZQQzpBZ2dBQUFBQUFCQUFBQUFBQUFBQUVBQUFBQUFBQUFBUUFBQUVBRWVFMllFPSIsInJhbmdlIjp7Im1pbiI6IjA1QzFERjIxOUY5OTIwIiwibWF4IjoiRkYifX1d",\
\
"tokens": [{"referenceNumber": "20251001-EC-2DD3AFF000-A6B7F19A95-11",\
\
"authorIdentifier": {"type": "Nip",\
\
"value": "5265877635"\
\
},\
\
"contextIdentifier": {"type": "Nip",\
\
"value": "5265877635"\
\
},\
\
"description": "Wystawianie i przeglądanie faktur.",\
\
"requestedPermissions": ["InvoiceRead",\
\
"InvoiceWrite"\
\
],\
\
"dateCreated": "2025-10-01T13:20:52.9919681+00:00",\
\
"status": "Active",\
\
"statusDetails": [ ]\
\
}\
\
]\
\
}`\
\
## [tag/Tokeny-KSeF/paths/~1api~1v2~1tokens~1{referenceNumber}/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Tokeny-KSeF/paths/~1api~1v2~1tokens~1{referenceNumber}/get) Pobranie statusu tokena\
\
##### Authorizations:\
\
_Bearer_\
\
##### path Parameters\
\
|     |     |\
| --- | --- |\
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny tokena KSeF. |\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
| referenceNumber<br>required | string = 36 characters <br>Numer referencyjny tokena KSeF. |\
| authorIdentifier<br>required | object<br>Identyfikator osoby która wygenerowała token. |\
| contextIdentifier<br>required | object<br>Identyfikator kontekstu, w którym został wygenerowany token i do którego daje dostęp. |\
| description<br>required | string \[ 5 .. 256 \] characters <br>Opis tokena. |\
| requestedPermissions<br>required | Array of strings (TokenPermissionType) <br>Items Enum:"InvoiceRead""InvoiceWrite""CredentialsRead""CredentialsManage""SubunitManage""EnforcementOperations"<br>Uprawnienia przypisane tokenowi. |\
| dateCreated<br>required | string <date-time> <br>Data i czas utworzenia tokena. |\
| lastUseDate | string or null <date-time> <br>Data ostatniego użycia tokena. |\
| status<br>required | string\
\
Enum:"Pending""Active""Revoking""Revoked""Failed"\
\
Status tokena.\
\
| Wartość | Opis |\
| --- | --- |\
| Pending | Token został utworzony ale jest jeszcze w trakcie aktywacji i nadawania uprawnień. Nie może być jeszcze wykorzystywany do uwierzytelniania. |\
| Active | Token jest aktywny i może być wykorzystywany do uwierzytelniania. |\
| Revoking | Token jest w trakcie unieważniania. Nie może już być wykorzystywany do uwierzytelniania. |\
| Revoked | Token został unieważniony i nie może być wykorzystywany do uwierzytelniania. |\
| Failed | Nie udało się aktywować tokena. Należy wygenerować nowy token, obecny nie może być wykorzystywany do uwierzytelniania. | |\
| statusDetails | Array of strings or null<br>Dodatkowe informacje na temat statusu, zwracane w przypadku błędów. |\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
get/api/v2/tokens/{referenceNumber}\
\
https://ksef-test.mf.gov.pl/api/v2/tokens/{referenceNumber}\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"referenceNumber": "20251001-EC-220B0CE000-E228129563-96",\
\
"authorIdentifier": {"type": "Nip",\
\
"value": "7762811692"\
\
},\
\
"contextIdentifier": {"type": "Nip",\
\
"value": "5265877635"\
\
},\
\
"description": "Wystawianie i przeglądanie faktur.",\
\
"requestedPermissions": ["InvoiceWrite",\
\
"InvoiceRead"\
\
],\
\
"dateCreated": "2025-07-11T12:23:56.0154302+00:00",\
\
"lastUseDate": "2025-07-11T12:23:56.0154302+00:00",\
\
"status": "Pending",\
\
"statusDetails": [ ]\
\
}`\
\
## [tag/Tokeny-KSeF/paths/~1api~1v2~1tokens~1{referenceNumber}/delete](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Tokeny-KSeF/paths/~1api~1v2~1tokens~1{referenceNumber}/delete) Unieważnienie tokena\
\
Unieważniony token nie pozwoli już na uwierzytelnienie się za jego pomocą. Unieważnienie nie może zostać cofnięte.\
\
##### Authorizations:\
\
_Bearer_\
\
##### path Parameters\
\
|     |     |\
| --- | --- |\
| referenceNumber<br>required | string (ReferenceNumber)  = 36 characters <br>Numer referencyjny tokena KSeF. |\
\
### Responses\
\
**204**\
\
No Content\
\
**400**\
\
Bad Request\
\
**401**\
\
Unauthorized\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 100 | 300 | 1200 | other |\
\
delete/api/v2/tokens/{referenceNumber}\
\
https://ksef-test.mf.gov.pl/api/v2/tokens/{referenceNumber}\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`\
\
## [tag/Uslugi-Peppol](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Uslugi-Peppol) Usługi Peppol\
\
## [tag/Uslugi-Peppol/paths/~1api~1v2~1peppol~1query/get](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Uslugi-Peppol/paths/~1api~1v2~1peppol~1query/get) Pobranie listy dostawców usług Peppol\
\
Zwraca listę dostawców usług Peppol zarejestrowanych w systemie.\
\
**Sortowanie:**\
\
- dateCreated (Desc)\
\
##### query Parameters\
\
|     |     |\
| --- | --- |\
| pageOffset | integer <int32>  >= 0 <br>Default: 0<br>Numer strony wyników. |\
| pageSize | integer <int32>  \[ 10 .. 100 \] <br>Default: 10<br>Rozmiar strony wyników. |\
\
### Responses\
\
**200**\
\
OK\
\
##### Response Schema: application/json\
\
|     |     |\
| --- | --- |\
| peppolProviders<br>required | Array of objects (PeppolProvider) <br>Lista dostawców usług Peppol. |\
| hasMore<br>required | boolean<br>Flaga informująca o dostępności kolejnej strony wyników. |\
\
**400**\
\
Bad Request\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 60 | - | - | - |\
\
get/api/v2/peppol/query\
\
https://ksef-test.mf.gov.pl/api/v2/peppol/query\
\
### Response samples\
\
- 200\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"peppolProviders": [{"id": "P123456789",\
\
"name": "Dostawca usług Peppol",\
\
"dateCreated": "2025-07-11T12:23:56.0154302+00:00"\
\
}\
\
],\
\
"hasMore": false\
\
}`\
\
## [tag/Dane-testowe](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Dane-testowe) Dane testowe\
\
API służy do tworzenia i zarządzania danymi testowymi, takimi jak podmioty, osoby fizyczne oraz uprawnienia. Możliwe do utworzenia podmioty to: organ egzekucyjny, grupa VAT oraz jednostki samorządu terytorialnego. W przypadku osób fizycznych można określić, czy dana osoba jest komornikiem. Funkcjonalność nadawania i odbierania uprawnień ma na celu odwzorowanie działania formularza ZAW-FA w środowisku testowym.\
\
Więcej informacji:\
\
- [Scenariusze testowe](https://github.com/CIRFMF/ksef-docs/blob/main/dane-testowe-scenariusze.md)\
\
## [tag/Dane-testowe/paths/~1api~1v2~1testdata~1subject/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Dane-testowe/paths/~1api~1v2~1testdata~1subject/post) Utworzenie podmiotu\
\
Tworzenie nowego podmiotu testowego. W przypadku grupy VAT i JST istnieje możliwość stworzenia jednostek podrzędnych. W wyniku takiego działania w systemie powstanie powiązanie między tymi podmiotami.\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| subjectNip<br>required | string (Nip)  = 10 characters ^\[1-9\]((\\d\[1-9\])\|(\[1-9\]\\d))\\d{7}$<br>10 cyfrowy numer NIP. |\
| subjectType<br>required | string<br>Enum:"EnforcementAuthority""VatGroup""JST" |\
| subunits | Array of objects or null (Subunit) |\
| description<br>required | string \[ 5 .. 256 \] characters |\
| createdDate | string or null <date-time> <br>W przypadku wielokrotnego tworzenia danych testowych z tym samym identyfikatorem nie można podawać daty wcześniejszej ani takiej samej jak poprzednia. |\
\
### Responses\
\
**200**\
\
OK\
\
**400**\
\
Bad Request\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 60 | - | - | - |\
\
post/api/v2/testdata/subject\
\
https://ksef-test.mf.gov.pl/api/v2/testdata/subject\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
\
`{"subjectNip": "7762811692",\
\
"subjectType": "EnforcementAuthority",\
\
"description": "Centrala",\
\
"createdDate": "2025-08-25T14:15:22+00:00"\
\
}`\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`\
\
## [tag/Dane-testowe/paths/~1api~1v2~1testdata~1subject~1remove/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Dane-testowe/paths/~1api~1v2~1testdata~1subject~1remove/post) Usunięcie podmiotu\
\
Usuwanie podmiotu testowego. W przypadku grupy VAT i JST usunięte zostaną również jednostki podrzędne.\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| subjectNip<br>required | string (Nip)  = 10 characters ^\[1-9\]((\\d\[1-9\])\|(\[1-9\]\\d))\\d{7}$<br>10 cyfrowy numer NIP. |\
\
### Responses\
\
**200**\
\
OK\
\
**400**\
\
Bad Request\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 60 | - | - | - |\
\
post/api/v2/testdata/subject/remove\
\
https://ksef-test.mf.gov.pl/api/v2/testdata/subject/remove\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
\
`{"subjectNip": "7762811692"\
\
}`\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`\
\
## [tag/Dane-testowe/paths/~1api~1v2~1testdata~1person/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Dane-testowe/paths/~1api~1v2~1testdata~1person/post) Utworzenie osoby fizycznej\
\
Tworzenie nowej osoby fizycznej, której system nadaje uprawnienia właścicielskie. Można również określić, czy osoba ta jest komornikiem – wówczas otrzyma odpowiednie uprawnienie egzekucyjne.\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| nip<br>required | string (Nip)  = 10 characters ^\[1-9\]((\\d\[1-9\])\|(\[1-9\]\\d))\\d{7}$<br>10 cyfrowy numer NIP. |\
| pesel<br>required | string (Pesel)  = 11 characters ^\\d{2}(?:0\[1-9\]\|1\[0-2\]\|2\[1-9\]\|3\[0-2\]\|4\[1-9\]\|5...Show pattern<br>11 cyfrowy numer PESEL. |\
| isBailiff<br>required | boolean |\
| description<br>required | string \[ 5 .. 256 \] characters |\
| isDeceased | boolean |\
| createdDate | string or null <date-time> <br>W przypadku wielokrotnego tworzenia danych testowych z tym samym identyfikatorem nie można podawać daty wcześniejszej ani takiej samej jak poprzednia. |\
\
### Responses\
\
**200**\
\
OK\
\
**400**\
\
Bad Request\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 60 | - | - | - |\
\
post/api/v2/testdata/person\
\
https://ksef-test.mf.gov.pl/api/v2/testdata/person\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
\
`{"nip": "7762811692",\
\
"pesel": "15062788702",\
\
"isBailiff": true,\
\
"description": "TestPerson_01",\
\
"isDeceased": false,\
\
"createdDate": "2025-08-25T14:15:22+00:00"\
\
}`\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`\
\
## [tag/Dane-testowe/paths/~1api~1v2~1testdata~1person~1remove/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Dane-testowe/paths/~1api~1v2~1testdata~1person~1remove/post) Usunięcie osoby fizycznej\
\
Usuwanie testowej osoby fizycznej. System automatycznie odbierze jej wszystkie uprawnienia.\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| nip<br>required | string (Nip)  = 10 characters ^\[1-9\]((\\d\[1-9\])\|(\[1-9\]\\d))\\d{7}$<br>10 cyfrowy numer NIP. |\
\
### Responses\
\
**200**\
\
OK\
\
**400**\
\
Bad Request\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 60 | - | - | - |\
\
post/api/v2/testdata/person/remove\
\
https://ksef-test.mf.gov.pl/api/v2/testdata/person/remove\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
\
`{"nip": "7762811692"\
\
}`\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`\
\
## [tag/Dane-testowe/paths/~1api~1v2~1testdata~1permissions/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Dane-testowe/paths/~1api~1v2~1testdata~1permissions/post) Nadanie uprawnień testowemu podmiotowi/osobie fizycznej\
\
Nadawanie uprawnień testowemu podmiotowi lub osobie fizycznej, a także w ich kontekście.\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| contextIdentifier<br>required | object |\
| authorizedIdentifier<br>required | object |\
| permissions<br>required | Array of objects (TestDataPermission) |\
\
### Responses\
\
**200**\
\
OK\
\
**400**\
\
Bad Request\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 60 | - | - | - |\
\
post/api/v2/testdata/permissions\
\
https://ksef-test.mf.gov.pl/api/v2/testdata/permissions\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"contextIdentifier": {"type": "Nip",\
\
"value": "7762811692"\
\
},\
\
"authorizedIdentifier": {"type": "Nip",\
\
"value": "7762811692"\
\
},\
\
"permissions": [{"description": "Opis testowy",\
\
"permissionType": "InvoiceRead"\
\
}\
\
]\
\
}`\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`\
\
## [tag/Dane-testowe/paths/~1api~1v2~1testdata~1permissions~1revoke/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Dane-testowe/paths/~1api~1v2~1testdata~1permissions~1revoke/post) Odebranie uprawnień testowemu podmiotowi/osobie fizycznej\
\
Odbieranie uprawnień nadanych testowemu podmiotowi lub osobie fizycznej, a także w ich kontekście.\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| contextIdentifier<br>required | object |\
| authorizedIdentifier<br>required | object |\
\
### Responses\
\
**200**\
\
OK\
\
**400**\
\
Bad Request\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 60 | - | - | - |\
\
post/api/v2/testdata/permissions/revoke\
\
https://ksef-test.mf.gov.pl/api/v2/testdata/permissions/revoke\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"contextIdentifier": {"type": "Nip",\
\
"value": "5265877635"\
\
},\
\
"authorizedIdentifier": {"type": "Nip",\
\
"value": "7762811692"\
\
}\
\
}`\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`\
\
## [tag/Dane-testowe/paths/~1api~1v2~1testdata~1attachment/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Dane-testowe/paths/~1api~1v2~1testdata~1attachment/post) Umożliwienie wysyłania faktur z załącznikiem\
\
Dodaje możliwość wysyłania faktur z załącznikiem przez wskazany podmiot\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| nip<br>required | string (Nip)  = 10 characters ^\[1-9\]((\\d\[1-9\])\|(\[1-9\]\\d))\\d{7}$<br>10 cyfrowy numer NIP. |\
\
### Responses\
\
**200**\
\
OK\
\
**400**\
\
Bad Request\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 60 | - | - | - |\
\
post/api/v2/testdata/attachment\
\
https://ksef-test.mf.gov.pl/api/v2/testdata/attachment\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
\
`{"nip": "7762811692"\
\
}`\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`\
\
## [tag/Dane-testowe/paths/~1api~1v2~1testdata~1attachment~1revoke/post](https://ksef-test.mf.gov.pl/docs/v2/index.html\#tag/Dane-testowe/paths/~1api~1v2~1testdata~1attachment~1revoke/post) Odebranie możliwości wysyłania faktur z załącznikiem\
\
Odbiera możliwość wysyłania faktur z załącznikiem przez wskazany podmiot\
\
##### Request Body schema: application/json\
\
|     |     |\
| --- | --- |\
| nip<br>required | string (Nip)  = 10 characters ^\[1-9\]((\\d\[1-9\])\|(\[1-9\]\\d))\\d{7}$<br>10 cyfrowy numer NIP. |\
| expectedEndDate | string or null <date-time> <br>Data wycofania zgody na przesyłanie faktur z załącznikiem. <br>Pole jest zdefiniowane w OpenAPI jako string w formacie date-time (ISO 8601), aby zapewnić kompatybilność z popularnymi generatorami klienta (m.in. starsze wersje .NET Framework nie obsługują formatu date). <br>System ignoruje część czasową - wykorzystywana jest wyłącznie data (YYYY-MM-DD). |\
\
### Responses\
\
**200**\
\
OK\
\
**400**\
\
Bad Request\
\
**429**\
\
Too Many Requests\
\
|  | req / s | req / min | req / h | grupa |\
| --- | --- | --- | --- | --- |\
| **Limity liczby żądań** | 60 | - | - | - |\
\
post/api/v2/testdata/attachment/revoke\
\
https://ksef-test.mf.gov.pl/api/v2/testdata/attachment/revoke\
\
### Request samples\
\
- Payload\
\
Content type\
\
application/json\
\
Copy\
\
`{"nip": "7762811692"\
\
}`\
\
### Response samples\
\
- 400\
\
Content type\
\
application/json\
\
Copy\
Expand all  Collapse all\
\
`{"exception": {"exceptionDetailList": [{"exceptionCode": 12345,\
\
"exceptionDescription": "Opis błędu.",\
\
"details": ["Opcjonalne dodatkowe szczegóły błędu."\
\
]\
\
}\
\
],\
\
"referenceNumber": "a1b2c3d4-e5f6-4789-ab12-cd34ef567890",\
\
"serviceCode": "00-c02cc3747020c605be02159bf3324f0e-eee7647dc67aa74a-00",\
\
"serviceCtx": "srvABCDA",\
\
"serviceName": "Undefined",\
\
"timestamp": "2025-10-11T12:23:56.0154302"\
\
}\
\
}`