from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_cors import CORS
from flask_caching import Cache

marshmallow = Marshmallow()
migrate = Migrate()
cors = CORS()
cache = Cache()