export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  useMocks: false,  // ← Cambia a false para usar API real
  jwtTokenKey: 'finanzas_token',
  jwtRefreshTokenKey: 'finanzas_refresh_token',
  // Usuario por defecto para pruebas con API (cuando useMocks = false)
  defaultUserId: 1
};