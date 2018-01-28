import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import DefaultRoute from 'ares-webclient/mixins/default-route';

export default Route.extend(DefaultRoute, {
    ajax: service(),
        
    model: function(params) {
        let aj = this.get('ajax');
        return aj.queryOne('wikiPageSource', { page_id: params['page_id'], version_id: params['version_id'] });
    },
    
    titleToken: function(model) {
        return `Source ${model.heading}`;
    }
});