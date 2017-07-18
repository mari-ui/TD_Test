export default localConfig;

function localConfig($translateProvider) {
    $translateProvider.translations('en', {
        'OPENACHEQUINGACCOUNT': 'Open a chequing account',
        'OPENASAVINGSACCOUNT': 'Open a savings account',
        'OPENAU.S.DOLLARACCOUNT': 'Open a U.S. Dollar account',
        'REVIEWMYEVERYDAYBANKINGNEEDS': 'Review my everyday banking needs',
        'SWITCHTOTD': 'Switch to TD',
        'APPLYFOROVERDRAFTPROTECTION': 'Apply for Overdraft Protection',
        'REVIEWMYEVERYDAYCANADAISACOUNTRYFORALLBANKINGNEEDS': 'Review my everyday canada is a country for all banking needs'
    });

    $translateProvider.translations('fr', {
        'OPENACHEQUINGACCOUNT': 'Ouvrir un compte chequing',
        'OPENASAVINGSACCOUNT': 'Ouvrir un compte d\'épargne',
        'OPENAU.S.DOLLARACCOUNT': 'Ouvrir un compte en dollars des États-Unis',
        'REVIEWMYEVERYDAYBANKINGNEEDS': 'Examinez mes besoins bancaires quotidiens',
        'SWITCHTOTD': 'Passer à TD',
        'APPLYFOROVERDRAFTPROTECTION': 'Demande de protection contre le découvert',
        'REVIEWMYEVERYDAYCANADAISACOUNTRYFORALLBANKINGNEEDS': 'Examiner mon quotidien canada est un pays pour tous les besoins bancaires'
    });

    $translateProvider.preferredLanguage('en');
}